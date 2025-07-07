const express = require ( 'express' )

const app = express();
const porta = 2000;

app.get('/', (req, res) => {
  res.send('BEM VINDO A INTERFACE')
})

app.get('/soma/', (req, res)=>{
    const soma = Number(req.query.num) + Number(req.query.num2);
    res.send('Soma e: ' + soma)
    console.log('soma e: ' + soma)
})

app.get('/multi', (req, res)=>{
    const multi = Number(req.query.num) * Number(req.query.num2);
    res.send('multiplicacao e: ' + multi)
})

app.get('/subtracao', (req, res)=>{
    const sub = Number(req.query.num) - Number(req.query.num2);
    res.send('subtracao e: ' + sub)
})

app.get('/divisao', (req, res)=>{
    const div = Number(req.query.num) / Number(req.query.num2);
    res.send('divisao e: ' + div)
})

app.listen(porta, () => {
    console.log('Servidor rodando na porta' + porta);
})