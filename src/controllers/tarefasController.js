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

    function stringParaData(data){
        const dataSplit = data.split("/");
        const dataComSeparador = dataSplit[1] + '-' + dataSplit[0] + '-' + dataSplit[2];
        const dataFormatada = new Date(dataComSeparador);
        return dataFormatada;
        }

        exports.getdataOrdenada = (req, res) => {
            const dataOrdenadas = tarefas.sort(function (a,b) {
                if (stringParaData(a.dataInclusao) > stringParaData(b.dataInclusao)) {
                    return 1
                }
                if (stringParaData(a.dataInclusao) < stringParaData(b.dataInclusao)) {
                    return -1;
            }
            return 0;
        })
        res.send(dataOrdenadas);

        }
        // exports.getPeriodoTarefa = (req, res) => {
        //     function calcularPeriodo(dataInicial, )
        // }