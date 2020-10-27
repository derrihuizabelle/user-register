export default {
  secret: process.env.KEY, // made with md5 hash generator
  expiresIn: process.env.EXPIRE, // you choose time
};
