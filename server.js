const http = require('http')
const server = http .createServer((req,res)=>{
    (res.write("<h1>Bonjour Node !!!!</h1>\n "))
    res.end()
})
server.listen(3000, ()=>{
    console.log("http://localhost:3000")
})