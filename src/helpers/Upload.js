require('dotenv').config();
const { Web3Storage, getFilesFromPath } = require('web3.storage');
const fs = require('fs');

const web3Token = process.env.WEB3_TOKEN;
const client = new Web3Storage({ token: web3Token });


async function upload(req, res, next) {
  const { profileImage } = req.files;
  console.log(profileImage.name);
  const pathToFile = __dirname + '/upload/' + profileImage.name

  await profileImage.mv(pathToFile);
  const file = await getFilesFromPath(pathToFile)
  const cid = await client.put(file)
  console.log('https://' + cid + '.ipfs.w3s.link/' + profileImage.name);
  await fs.unlink(pathToFile, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('file successfully uploaded and removed from server directory')
    }
  })
  req.body.image = 'https://' + cid + '.ipfs.w3s.link/' + profileImage.name
  next();
}

module.exports = {
  upload,
}