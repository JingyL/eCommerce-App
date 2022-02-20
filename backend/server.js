import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.send('Sever is ready');
})

app.listen(5000, ()=>{
    console.log('Sever at http://localhost:5000');
})