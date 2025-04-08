const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

const homeRoutes = require('./routing/home');
const killRoutes = require('./routing/kill');
const logoutRoutes = require('./routing/logout');
const productRoutes = require('./routing/products');

app.use('/', homeRoutes);
app.use('/kill', killRoutes);
app.use('/logout', logoutRoutes);
app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

function getFileFromAbsolutePath(filePath) {
  return path.join(__dirname, filePath);
}

module.exports = { getFileFromAbsolutePath };