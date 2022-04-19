const express = require('express');
const { dbClient } = require('../config');

const categoriesRoutes = express.Router();

categoriesRoutes.get('/categories', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    // gauti kategorijas
    const collection = dbClient.db('shop').collection('categories');
    const allCategories = await collection.find().toArray();
    res.status(200).json(allCategories);
  } catch (error) {
    console.error('error in getting all the categories', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
  }
  await dbClient.close();
});

module.exports = categoriesRoutes;
