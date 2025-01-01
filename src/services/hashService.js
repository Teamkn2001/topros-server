const bcrypt = require("bcryptjs");

const hashService = {};

hashService.hashPassword = (password) => {
  return bcrypt.hash(password, 11);
};

hashService.comparePassword = (password, hashValue) => {
  return bcrypt.compare(password, hashValue);
};

module.exports = hashService;