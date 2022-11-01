const database = [
    {
      "title": "Escuadra",
      "price": 123.45,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
      "id": 1
    },
    {
      "title": "Calculadora",
      "price": 234.56,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      "id": 2
    },
    {
      "title": "Globo Terráqueo",
      "price": 345.67,
      "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
      "id": 3
    }
];

const obtenerUltimoId = () => {
    const ultimoProducto = database[database.length - 1];
    return ultimoProducto.id;
}

const obtenerProducto = (id) => {
    return database.find((item) => item.id === parseInt(id))
}

const getProductos = (req, res) => {
    res.json(database);
};

const getProductoById = (request, res) => {
    const producto = obtenerProducto(request.params.id);
    if(producto === undefined) {
        res.json({error: 'Producto no encontrado'});
    } else {
        console.log(producto);
        res.json(producto);
    }
};

const postProducto = (request, res) => {
    const newProducto = {
        ...request.body,
        id: obtenerUltimoId() + 1
    }

    console.log(newProducto);

    database.push(newProducto);
    res.json(newProducto);
};

const putProducto = (request, res) => {
    const producto = obtenerProducto(request.params.id);
    if(producto === undefined) {
        res.json({error: 'Producto no encontrado'});
    } else {
        producto.title = request.body.title;
        producto.price = request.body.price;
        producto.thumbnail = request.body.thumbnail;
        res.json(producto);

    }
};

const deleteProducto = (request, res) => {
    const producto = obtenerProducto(request.params.id);
    if(producto === undefined) {
        res.json({error: 'Producto no encontrado'});
    } else {
            
        const producto = database.find((item) => item.id === parseInt(request.params.id));
        const index = database.indexOf(producto);
        database.splice(index, 1);
        res.json(producto);

    }
}

module.exports = {
    getProductos,
    getProductoById,
    postProducto,
    putProducto,
    deleteProducto
};
