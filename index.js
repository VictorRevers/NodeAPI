const { json } = require('express');
const express = require('express');
const bodyParse = require('body-parser');


const userRoute = require('./routes/userRoute');

const app = express();
app.use(bodyParse.urlencoded({ extended: false }))
const port = 3000;

userRoute(app);

app.get('/', (req, res)=>{
    res.send('Olá, mundo!')
    
})

app.listen(port, ()=>{
    console.log(`Api rodando na porta ${port}`);
});
