const express = require('express');
const path = require('path');

const productRouter = require('./src/routers/productos');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/productos', productRouter);

app.get('/',function(req,res){
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(port, () => {
  console.log(`RUN http://localhost:${port}`);
});