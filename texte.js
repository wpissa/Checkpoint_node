const fs = require("fs")
fs.appendFile("welcome.txt","Hello Node", (error)=>{
    if (error) throw error
})

fs.readFile("Hello.txt", (error, data)=>{
    if (error) throw error
    console.log (data.toString())
})