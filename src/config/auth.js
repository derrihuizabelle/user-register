export default {
  secret: process.env.KEY, // criada com md5 hash generator
  expiresIn: process.env.EXPIRE, // voce escolhe o tempo
};
