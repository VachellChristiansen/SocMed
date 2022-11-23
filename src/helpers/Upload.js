const { Web3Storage, getFilesFromPath } = require('web3.storage');
const fs = require('fs');

const web3Token = process.env.WEB3_TOKEN;
const client = new Web3Storage({ token: web3Token });


async function upload(req, res, next) {
  const { myfile } = req.files;
  console.log(myfile.name)
  await myfile.mv('../' + __dirname + '/upload/' + myfile.name);
  const file = await getFilesFromPath(`../upload/${myfile.name}`)
  const cid = await client.put(file)
  const pathToFile = `../upload/${myfile.name}`
  await fs.unlink(pathToFile, (err) => {
    if (err) {
      throw err;
    } else {
      console.log('file successfully uploaded and removed from server directory')
    }
  })
  next();
}

module.exports = {
  upload,
}