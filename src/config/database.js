module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    // Registro com timer
    timestamps: true,
    // Converte tabelas e colulas camelCase para sublinhado
    underscored: true,
    // Converte nomes de modelo camelCase para sublinhado
    underscoredAll: true,
  },
};
