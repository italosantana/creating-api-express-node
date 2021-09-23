const ProdutoController = require('../controllers/ProdutosControllers');

module.exports = (app) => {
    app.post('/produto', ProdutoController.post);
    app.put('/produto/:id', ProdutoController.put);
    app.delete('/produto/:id', ProdutoController.delete);
    app.get('/produtos', ProdutoController.get);
    app.get('/produto/:id', ProdutoController.getById);
}