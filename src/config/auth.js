export default {
  secret: process.env.JWT_SECRET_KEY, // made with md5 hash generator
  expiresIn: process.env.EXPIRE, // you choose time
};
