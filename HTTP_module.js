const http = require('http');
const fs = require('fs');
const path = require('path');
const bookPath = path.join(__dirname, )
// Create an http server
const HOST_NAME = "127.0.0.1"
const PORT = "8000"
function handleRequest(req, res){
postBooks(req,res)
}
const server = http.createServer(handleRequest)
server.listen(PORT, HOST_NAME, ()=> {
    console.log(`server has started running at http://${PORT}:${HOST_NAME}`)
})
function postBooks(req,res){
   const body = []
    req.on('data', (chunk) => {
        body.push(chunk)
    })
    req.on('end', ()=> {
        const parsedBody = Buffer.concat(body).toString()
        const booksToPost = JSON.parse(parsedBody)
        fs.writeFile(bookPath, JSON.stringify(booksToPost), (err)=>{
            if(err){

        }

        })
    })
}
// Return “Hello world” from the response


// Ensure when you navigate to the server on the browser, “Hello world” is returned.

