const joi = require('joi'); // buat library validasi

module.exports = {
  register: {
    body: {
      email: joi.string().required(),
      username: joi.string().required(),
      name: joi.string().required(),
      password: joi.string().required(),
      confirmPassword: joi.string().required(),
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
      bio: joi.string().allow(""),
      image: joi.string()
    },
  },
  upload: {
    body: {
      username: joi.string(),
      title: joi.string(),
      music: joi.string().allow(""),
      file: joi.string(),
    },
  },
  changePassword: {
    body: {
      newpassword: joi.string().required(),
      cnewpassword: joi.string().required(),
    }
  }
};