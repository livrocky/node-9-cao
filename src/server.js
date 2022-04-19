const express = require('express');
const morgan = require('morgan');
const categoriesRoutes = require('./api/categoriesRoutes');
const productsRoutes = require('./api/productsRoutes');
const userRoutes = require('./api/usersRoutes');
const { PORT } = require('./config');

const app = express();

// Global MiddleWare
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.json('OK'));

// Routes
app.use('/api', userRoutes);
app.use('/api', categoriesRoutes);
app.use('/api', productsRoutes);

app.listen(PORT, () => console.log('server online, PORT', PORT));
