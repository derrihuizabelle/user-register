const bcrypt = require('bcryptjs');

module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Administrador',
          email: 'admin@teste.com',
          // 8 =>  lvl of crypt
          password_hash: bcrypt.hashSync('123ABC', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
