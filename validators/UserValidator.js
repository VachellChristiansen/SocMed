const joi = require('joi'); // buat library validasi

module.exports = {
  register: {
    body: {
      email: joi.string().email().required(),
      username: joi.string().min(3).max(100).required(),
      name: joi.string().min(3).max(100).required(),
      password: joi.string().min(6).max(32).required(),
      confirmPassword: joi.string().min(6).max(32).required()
    },
  },
  login: {
    body: {
      username: joi.string().required(),
      password: joi.string().required(),
    },
  },
  edit: {
    body: {
      name: joi.string().min(3).max(100).required(),
      username: joi.string().min(3).max(100).required(),
      email: joi.string().email().required(),
      bio: joi.string().alphanum(),
    },
  },
  upload: {
    body: {
      username: joi.string(),
      title: joi.string(),
      music: joi.string(),
      file: joi.string().required(),
    },
  },
};