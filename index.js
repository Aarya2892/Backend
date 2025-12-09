require('dotenv').config()
const express = require('express')

const app = express()
const port= 3000;

const userData=[{
  Id:1,
  name: 'Denno',
  course: 'js',
  payment: 4000
},
{
  Id:2,
  name: 'james',
  course: 'react',
  payment: 7000
}
]

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/login',(req,res)=>{
    res.send(`<h1>login successfully`)
})

app.get('/data', (req,res)=>{
  res.json(userData)
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})