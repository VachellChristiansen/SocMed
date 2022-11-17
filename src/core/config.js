process.env.NODE_ENV = (process.env.NODE_ENV || 'development').toLowerCase();
const dotenv = require('dotenv');
const path = require('path');
const envFound = dotenv.config({ path: path.join(__dirname, '../../.env') });
console.log(path.join(__dirname, "../../.env"));
if (envFound.error) {
  throw new Error('File .env not found');
}

module.exports = {
  jwtSecretKey: process.env.JWT_SECRET_KEY || '',
};