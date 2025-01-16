require('dotenv').config() // for env file(requiring env file)

const express = require('express')
const app = express();
const port = 15000

app.get('/', (req,res)=>{ // '/' : home route(iss pr agr koi v request aati h toh hum respomse send kr denge )
    res.send('Hello World');
})
//localhost:4000

app.get('/twitter', (req,res)=>{ 
    res.send('Hello Twitter');
})
//localhost:4000/twitter

app.get('/login' , (req , res) => {
    res.send('<h1>Please login at my website</h1>') //restart it after that it will give output
})

// app.listen(port , ()=>{
//     console.log(`Example app listening on port ${port}`)
// })


//for env file we write process.env.name of variable
app.listen(process.env.PORT , ()=>{
    console.log(`Example app listening on port ${port} `)
})