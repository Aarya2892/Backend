require('dotenv').config()
const express = require('express')

const app = express()
const port= 3000;

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/login',(req,res)=>{
    res.send(`<h1>login successfully`)
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})