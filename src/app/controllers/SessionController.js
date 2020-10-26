import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    try {
      // Consistencia dos inputs passados
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.json({
          error: 'Validation fails',
        });
      }

      // Consistencia se o dado (constraint) confere na base
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(401).json({
          error: 'User not found',
        });
      }

      // Consistencia se a senha confere no Model

      await bcrypt.compare(password, user.password_hash).then((result) => {
        if (!result) {
          return res.status(401).json({
            error: 'Password does not match',
          });
        }
      });

      const { id, name } = user;

      /**
       * Em user: É passado para o jwt um cabecalho {id, name, email}, este será decodificado la na frente quando necessário;
       * Em token: É passado a chave secreta (de sua preferência) e do tempo de expiração da chave;
       */

      return res.json({
        user: {
          id,
          name,
          email,
        },
        token: jwt.sign(
          {
            id,
          },
          authConfig.secret,
          {
            expiresIn: authConfig.expiresIn,
          }
        ),
      });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new SessionController();
