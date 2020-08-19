'use strict';

let response = require('./res');
let connection = require('./connection');

exports.index = function( req, res) {
  response.ok('Aplikasinya jalan nih',res)
};