exports.post = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send(`O pedido de numeracao ${id} foi cadastrado!`);
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send(`O pedido de numeracao ${id} foi atualizado!`);
};

exports.delete = (req, res, next) => {
    const id = req.params.id;
    req.status(200).send(`O pedido ${id} foi deletado com sucesso!`);
};

exports.get = (req, res, next) => {
    res.status(200).send('Os pedidos foram listados com sucesso!');
};

exports.getById = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send(`O pedido de numeracao ${id}, segue abaixo:`);
};
