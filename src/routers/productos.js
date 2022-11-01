const { getProductos, getProductoById, postProducto, putProducto, deleteProducto } = require('../controllers/producto');

const { Router } = require('express');
const logRequestInfo = require('../middlewares/logRequestInfo');

const productosRouter = Router();

productosRouter.get('/', logRequestInfo, getProductos);
productosRouter.get('/:id', logRequestInfo, getProductoById);
productosRouter.post('/', logRequestInfo, postProducto);
productosRouter.put('/:id', logRequestInfo, putProducto);
productosRouter.delete('/:id', logRequestInfo, deleteProducto);

module.exports = productosRouter;



