import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  // if theres no token
  if (!authorization) {
    return res.status(401).json({
      error: 'Token not provide',
    });
  }

  // destructuring (Bearer, ...token)
  const [, token] = authorization.split(' ');

  try {
    /**
     * with promisify we can use async/await and avoid the verify old return
     * promisify is a nodejs util
     */

    const { id } = await promisify(jwt.verify)(token, authConfig.secret);
    // have the userId always on my request
    req.userId = id;
  } catch (error) {
    return res.status(401).json({
      error: 'Token invalid',
    });
  }
  return next();
};
