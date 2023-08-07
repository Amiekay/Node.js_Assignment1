// Create an http server
// Return “Hello world” from the response
// Ensure when you navigate to the server on the browser, “Hello world” is returned.


const http = require('http')

const HOSTNAME = 'localhost'
const PORT = '8000'


function requestHandler(req, res) {
    console.log(req)
    res.end('Hello world')
}
const server = http.createServer(requestHandler)
server.listen(PORT, HOSTNAME, () => {
    console.log(`server created succesfully at http://${HOSTNAME}:${PORT}`)
})


