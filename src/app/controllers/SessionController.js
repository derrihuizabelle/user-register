import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    try {
      // using yup for validation

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.json({
          error: 'Validation fails',
        });
      }

      // the most important: checking if user exist

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

      // now check the password

      await bcrypt.compare(password, user.password_hash).then((result) => {
        if (!result) {
          return res.status(401).json({
            error: 'Password does not match',
          });
        }
      });

      const { id, name } = user;

      /**
       * User: Informations that we need since the user is authorized
       * Token: your key and your expire time
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
