import express from 'express'
import fs from 'fs'

const app = express()
const port = 3000

app.post('/auth/o2/token', (req, res) => {
    res.json({
        access_token: "accessToken",
        refresh_token: "refreshToken",
        token_type: "bearer",
        expires_in: 3600
    })
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