const {somar,multiplicar,dividir,subtrair} = require ('../function/functions')

function apiSomar(req, res){
    const {num1  , num2} = req.body;
    const result = somar(num1, num2)

    res.status(200).send
    ({
        result: result
    })
}

 function apiMultiplicar(req, res){
    const {num1  , num2} = req.body;
    const result = multiplicar(num1, num2)

    res.status(200).send
    ({
        result: result
    })
}

function apiSubtrair(req, res){
    const {num1  , num2} = req.body;
    const result = subtrair(num1, num2)

    res.status(200).send
    ({
        result: result
    })
}

function apiDividir(req, res){
    const {num1  , num2} = req.body;
    const result = dividir(num1, num2)
    res.status(200).send({
        result: result
    })
}

module.exports = { apiSomar, apiMultiplicar, apiSubtrair, apiDividir }