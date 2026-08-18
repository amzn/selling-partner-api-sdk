import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Reuse the same auto-discovery mechanism as scripts/generate-sdk.sh:
// every *.json file under <models-repo>/models is picked up automatically,
// except for entries listed in scripts/api-blacklist.txt. This keeps the
// mock resource generator in sync with the SDK generator without having to
// maintain a second hardcoded list of APIs.
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const MODELS_ROOT = process.env.MODELS_ROOT
    ? path.resolve(process.env.MODELS_ROOT)
    : path.join(SCRIPT_DIR, '../../selling-partner-api-models')
const BLACKLIST_FILE = path.join(SCRIPT_DIR, '../scripts/api-blacklist.txt')

// Convert a shell-style glob (as used in api-blacklist.txt) to a RegExp.
// A single '*' matches any run of characters except '/', matching the glob
// semantics used by generate-sdk.sh.
function globToRegExp(glob) {
    const escaped = glob.replace(/[.+^${}()|[\]\\]/g, '\\$&')
    return new RegExp(`^${escaped.replace(/\*/g, '[^/]*')}$`)
}

function loadBlacklist(file) {
    if (!fs.existsSync(file)) return []
    return fs.readFileSync(file, 'utf8')
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'))
        .map(globToRegExp)
}

function isBlacklisted(relativePath, patterns) {
    return patterns.some((pattern) => pattern.test(relativePath))
}

function findJsonFiles(dir) {
    const results = []
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            results.push(...findJsonFiles(fullPath))
        } else if (entry.isFile() && entry.name.endsWith('.json')) {
            results.push(fullPath)
        }
    }
    return results
}

const blacklistPatterns = loadBlacklist(BLACKLIST_FILE)

const models = findJsonFiles(path.join(MODELS_ROOT, 'models'))
    .map((file) => path.relative(MODELS_ROOT, file).split(path.sep).join('/'))
    .filter((relativePath) => !isBlacklisted(relativePath, blacklistPatterns))
    .sort()
    .map((relativePath) => path.join(MODELS_ROOT, relativePath))

for (const path of models) {
    console.log(path)
    const serializedContent = fs.readFileSync(path)
    const content = JSON.parse(serializedContent, 'utf8')
    const operations = ["get", "put", "post", "delete", "patch"]

    // Responses
    Object.values(content.paths)
        .flatMap((path) =>
            Object.entries(path)
                .filter((operation) => operations.includes(operation[0]))
                .map((operation) => operation[1])
        ).forEach((operation) => {
        const operationId = operation.operationId.replace(/^./, operation.operationId[0].toLowerCase())
        const tag = operation.tags ? operation.tags[0].replace(/\W/g, "").toLowerCase() : "default"
        try {
            const successStatus = ["200", "201", "202", "207"]
            const successObjects = Object.keys(operation['responses']).filter((key) => successStatus.includes(key))
            if (Array.isArray(successObjects) && successObjects.length > 0) {
                const response = JSON.stringify(operation['responses'][successObjects[0]]['x-amzn-api-sandbox']['static'][0]['response'])
                fs.writeFileSync(`res/responses/${tag}-${operationId}Response.json`, response)
            }
        } catch (e) {
            console.log(e)
            console.log(`Unable to write response file for operation ${operationId}`)
        }
    })

    // Requests
    /*Object.values(content.paths)
        .flatMap((path) =>
            Object.entries(path)
                .filter((operation) => operations.includes(operation[0]))
                .map((operation) => operation[1])
        ).forEach((operation) => {
        const operationId = operation.operationId.replace(/^./, operation.operationId[0].toLowerCase())
        try {
            const successStatus = ["200", "201", "202", "204", "207"]
            const successObjects = Object.keys(operation['responses']).filter((key) => successStatus.includes(key))
            if (Array.isArray(successObjects) && successObjects.length > 0) {
                const request = JSON.stringify(operation['responses'][successObjects[0]]['x-amzn-api-sandbox']['static'][0]['request']['parameters']['body']['value'])
                fs.writeFileSync(`res/requests/${operationId}Request.json`, request)
            }
        } catch (e) {
            console.log(`Unable to write request file for operation ${operationId}`)
        }
    })*/
}