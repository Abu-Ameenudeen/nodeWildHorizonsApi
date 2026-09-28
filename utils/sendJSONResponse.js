export const sendJSONResponse = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = payload
    res.end(JSON.stringify(payload))
}