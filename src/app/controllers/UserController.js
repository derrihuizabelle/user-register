import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  // Cadastra um único registro
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      });

      if (!(await schema.isValid(req.body))) {
        return res.json({
          error: 'Validation fails',
        });
      }

      const userExists = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (userExists) {
        return res.status(400).json({
          error: 'User already exist',
        });
      }

      const { id, name, email, password } = await User.create({ ...req.body });
      return res.json({
        id,
        name,
        email,
        password,
      });
    } catch (error) {
      return res.json({ error });
    }
  }

  async update(req, res) {
    return res.status(200).json({
      msg: 'Token is valid and you are authorized',
    });
  }
}

export default new UserController();
