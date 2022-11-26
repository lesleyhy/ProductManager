const { Product } = require('../models/product.model');

const create = async (data) => {
  console.log('service: create a Product');

  const product = await Product.create(data);
  return product;
};

const getAll = async () => {
  const products = await Product.find();
  return products;
};

const getOneById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

const deleteOneById = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product;
};

const updateOneById = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, {
    // validations
    runValidators: true,
    new: true,
  });
  return product;
};


const createMany = async (documents) => {
  const createPromises = documents.map((document) =>
    create(document)
  );
  return Promise.allSettled(createPromises);
};

module.exports = {
  create: create,
  getAll,
  getOneById,
  deleteOneById,
  updateOneById,
  createMany,
};