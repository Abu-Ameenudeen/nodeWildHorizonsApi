import http from "node:http"

const PORT = 8000
const server = http.createServer((req, res) => {
    if (req.url === "/api" && req.method === "GET") {
        res.end("Salam From Server")
    }
})

server.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
})