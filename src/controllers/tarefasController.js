const tarefas = require('../model/tarefas.json');

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    if(id > 4 || id <= 0){
        res.redirect(300);
}
res.status(200).send(tarefas.find(tarefas => tarefas.id == id))
        
    }

    exports.getConcluidos = (req, res) => {
        const concluded = tarefas.filter(tarefas => tarefas.concluido == "true")
        res.status(200).send(concluded);
    }

    exports.getAutor = (req, res) => {
        const autores = req.params.autor
        res.status(200).send(tarefas.filter(tarefas => tarefas.autor == autores));
    }

    exports.getConclusao = (req, res) => {
        const conclusao = req.params.dataConclusao
        res.status(200).send(tarefas.sort(tarefas => tarefas.conclusao == conclusao));
    }
    /*
    exports.getAge = (req, res) => {
        const id = req.params.id
        const aluna = alunas.find(item => item.id == id)
        const dataNasc = aluna.dateOfBirth
        const arrData = dataNasc.split("/")
        const dia = arrData[0]
        const mes = arrData[1]
        const ano = arrData[2]
        const idade = calcularIdade(ano, mes, dia)
        res.status(200).send({ idade })
      }
      */

     n3-backend-projeto-pratico