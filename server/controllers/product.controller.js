const {
    create,
    getAll,
    getOneById,
    deleteOneById,
    updateOneById,
    createMany,
} = require('../services/products.services');

const handleCreate = async (req, res) =>{
    console.log('controller:',req.body)

    try {
        const product = await create(req.body);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAll = async (req, res) => {
    try {
        const products = await getAll();
        return res.json(products);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleGetOneById = async (req, res) => {
    try {
        const product = await getOneById(req.params.id);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleDeleteOneById = async (req, res) => {
    try {
        const product = await deleteOneById(req.params.id);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleUpdateOneById = async (req, res) => {
    try {
        const product = await updateOneById(req.params.id, req.body);
        return res.json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
};

const handleCreateMany = async (req, res) => {
    try {
        if (Array.isArray(req.body) === false) {
        throw new Error('The request body must be an array.');
        }

        const settledOutcomes = await createMany(req.body);
        return res.json(settledOutcomes);
    } catch (error) {
        return res.status(400).json(error);
    }
};


module.exports = {
    handleCreate : handleCreate,
    handleGetAll,
    handleGetOneById,
    handleDeleteOneById,
    handleUpdateOneById,
    handleCreateMany,
};