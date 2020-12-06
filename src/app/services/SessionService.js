import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionService {
  async store(request) {
    const { email, password } = request;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    // now check the password

    await bcrypt.compare(password, user.password_hash).then((result) => {
      if (!result) {
        throw new Error('Password does not match');
      }
    });

    const { id, name } = user;

    /**
     * User: Informations that we need since the user is authorized
     * Token: your key and your expire time
     */

    return {
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
    };
  }
}

export default new SessionService();
