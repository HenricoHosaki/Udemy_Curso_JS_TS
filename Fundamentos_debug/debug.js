const express = require ( 'express' )
const { apiSomar, apiMultiplicar, apiSubtrair, apiDividir } = require('./operacoes_debug/operacoes_deb');
const app = express();
const porta = 3001;
app.use(express.json())


app.post('/soma', apiSomar)

app.post('/multi', apiMultiplicar)

app.post('/subtracao', apiSubtrair)

app.post('/divisao', apiDividir)

app.listen(porta, () => {
    console.log('Servidor rodando na porta' + porta);
})