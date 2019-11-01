const port = 3000;
const app = require('./src/app');

app.listen(port, function(){
    console.log(`Está porta esta funcionando ${port}`)
})

