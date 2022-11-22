const bcrypt = require('bcrypt');

async function hash(key) {
  return bcrypt.hash(key, 10);
}

async function compare(key, hashedKey) {
  return bcrypt.compareSync(key, hashedKey);
}
module.exports = {
  hash,
  compare,
};