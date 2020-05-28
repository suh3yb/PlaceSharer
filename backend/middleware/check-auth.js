'use strict';

const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

const checkAuth = (req, res, next) => {
  if (req.method === 'OPTIONS') return next();

  try {
    // Authorization: 'Bearer TOKEN'
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      throw new Error('Authentication failed.');
    }

    const { userId } = jwt.verify(token, 'supersecret_bla_bla_');
    req.userData = { userId };
    next();
  } catch (err) {
    const error = new HttpError('Authentication failed.', 403);
    return next(error);
  }
};

module.exports = checkAuth;
