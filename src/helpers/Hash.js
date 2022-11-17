const bcrypt = require('bcrypt');

async function hash(key) {
  const saltRounds = 8;
  const hashedKey = await new Promise((resolve, reject) => {
    bcrypt.hash(key, saltRounds, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
  return hashedKey;
}

async function compare(key, hashedKey) {
  return bcrypt.compareSync(key, hashedKey);
}
module.exports = {
  hash,
  compare,
};