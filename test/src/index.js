import express from 'express'
import fs from 'fs'

const app = express()
const port = 3000

// Rate limit test state: tracks per-operation call counts and configuration
const rateLimitState = {}

app.post('/auth/o2/token', (req, res) => {
    res.json({
        access_token: "accessToken",
        refresh_token: "refreshToken",
        token_type: "bearer",
        expires_in: 3600
    })
})

/**
 * Configure rate limit behavior for a specific operation.
 *
 * POST /rate-limit/configure/:operationKey
 * Query params:
 *   failCount - Number of 429 responses before returning success (default: 0)
 *   rateLimitValue - Value of x-amzn-RateLimit-Limit header on success (default: "5.0")
 *   successStatus - HTTP status on success (default: 200)
 *
 * This resets the call counter for the operation.
 */
app.post('/rate-limit/configure/:operationKey', (req, res) => {
    const operationKey = req.params.operationKey
    const failCount = parseInt(req.query.failCount) || 0
    const rateLimitValue = req.query.rateLimitValue || "5.0"
    const successStatus = parseInt(req.query.successStatus) || 200

    rateLimitState[operationKey] = {
        failCount,
        rateLimitValue,
        successStatus,
        callCount: 0
    }

    console.log(failCount)
    console.log(req.query.failCount)

    res.status(204).send()
})

/**
 * Reset rate limit state for all operations or a specific one.
 *
 * POST /rate-limit/reset
 * POST /rate-limit/reset/:operationKey
 */
app.post('/rate-limit/reset/:operationKey?', (req, res) => {
    if (req.params.operationKey) {
        delete rateLimitState[req.params.operationKey]
    } else {
        Object.keys(rateLimitState).forEach(key => delete rateLimitState[key])
    }
    res.status(204).send()
})

/**
 * Get current rate limit state (for test diagnostics).
 *
 * GET /rate-limit/state/:operationKey
 */
app.get('/rate-limit/state/:operationKey', (req, res) => {
    const state = rateLimitState[req.params.operationKey]
    if (state) {
        res.json(state)
    } else {
        res.status(404).json({ error: 'No state configured for operation' })
    }
})

/**
 * Rate-limited endpoint that returns 429 for the configured number of calls,
 * then returns success with x-amzn-RateLimit-Limit header.
 *
 * ALL /rate-limit/test/:operationKey
 * Supports any HTTP method to simulate different SP-API operations.
 */
app.all('/rate-limit/test/:operationKey', (req, res) => {
    const operationKey = req.params.operationKey
    const state = rateLimitState[operationKey]

    if (!state) {
        res.status(500).json({ error: 'Operation not configured. Call POST /rate-limit/configure/' + operationKey + ' first.' })
        return
    }

    state.callCount++

    if (state.callCount <= state.failCount) {
        // Return 429 Too Many Requests
        res.status(429).json({
            errors: [{
                code: "QuotaExceeded",
                message: "You exceeded your quota for the requested resource.",
                details: `Call ${state.callCount} of ${state.failCount} throttled calls`
            }]
        })
    } else {
        // Return success with rate limit header
        res.set('x-amzn-RateLimit-Limit', state.rateLimitValue)
        res.status(state.successStatus).json({
            payload: {
                message: "Success after rate limiting",
                callCount: state.callCount,
                rateLimitValue: state.rateLimitValue
            }
        })
    }
})

app.post('/response/:name/code/:code', (req, res) => {
    app.locals.response = req.params.name
    app.locals.code = req.params.code
    res.status(204).send()
})

app.all('*', (req, res) => {
    const path = './res/responses/' + app.locals.response + 'Response.json'
    if (fs.existsSync(path)) {
        const response = fs.readFileSync(path, {encoding: 'utf-8'})
        res.status(app.locals.code).json(JSON.parse(response))
    } else {
        res.status(app.locals.code).send()
    }
})

app.listen(port, () => {})