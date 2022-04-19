const express = require('express');
// const { ObjectId } = require('mongodb');
const { dbClient } = require('../config');

const productsRoutes = express.Router();

productsRoutes.get('/products', async (req, res) => {
  try {
    await dbClient.connect();
    console.log('connected');
    const collection = dbClient.db('shop').collection('products');
    const allProducts = await collection.find().toArray();
    res.status(200).json(allProducts);
  } catch (error) {
    console.error('error in getting all the products', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
  }
  await dbClient.close();
});

module.exports = productsRoutes;
