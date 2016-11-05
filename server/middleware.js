'use strict';

const bodyParser  = require('body-parser');
const path = require('path');

module.exports = function (app, express) {
  const routes = express.Router();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../client')));
};
