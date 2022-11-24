require('dotenv').config();
const { Web3Storage, getFilesFromPath } = require('web3.storage');
const fs = require('fs');

const web3Token = process.env.WEB3_TOKEN;
const client = new Web3Storage({ token: web3Token });


async function upload(req, res, next) {
  console.log(req.files)
  const { image } = req.files;
  console.log(image.name)
  await image.mv(__dirname + '/public/' + image.name);
  const file = await getFilesFromPath(`./public/${image.name}`)
  const cid = await client.put(file)
  console.log('https://' + cid + '.ipfs.w3s.link/' + image.name);
  const pathToFile = `./public/${image.name}`
  await fs.unlink(pathToFile, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('file successfully uploaded and removed from server directory')
    }
  })
  req.imageLink = 'https://' + cid + '.ipfs.w3s.link/' + image.name
  next();
}

module.exports = {
  upload,
}