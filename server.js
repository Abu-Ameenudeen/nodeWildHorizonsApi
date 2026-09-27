import http from "node:http"
import { getDataFromDB } from "./database/db.js"

const PORT = 8000
const server = http.createServer(async (req, res) => {
    const destination = await getDataFromDB()
    if (req.url === "/api" && req.method === "GET") {
        res.end(JSON.stringify(destination))
    }
})

server.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
})