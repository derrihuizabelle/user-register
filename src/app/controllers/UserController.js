import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async show(req, res) {
    try {
      const schema = Yup.object().shape({
        id: Yup.string().required(),
      });

      if (!(await schema.isValid(req.query))) {
        return res.json({ error: 'Validation fail' });
      }

      const userExists = await User.findOne({
        where: {
          id: req.query.id,
        },
      });

      if (!userExists) {
        return res.status(400).json({
          error: 'User dont exist',
        });
      }

      return res.json({
        userExists,
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async index(req, res) {
    try {
      const schema = Yup.object().shape({});

      if (!(await schema.isValid(req.body))) {
        return res.json({ error: 'Validation fail' });
      }

      const userList = await User.findAll();

      if (!userList) {
        return res.status(400).json({
          error: 'Empty list',
        });
      }

      return res.json({
        userList,
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      });

      if (!(await schema.isValid(req.body))) {
        return res.json({
          error: 'Validation faill',
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
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      });

      if (!(await schema.isValid(req.body))) {
        return res.json({
          error: 'Validation faill',
        });
      }

      const userExists = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!userExists) {
        return res.status(400).json({
          error: 'User dont exist',
        });
      }

      const response = await User.update(req.body, {
        where: { id: userExists.id },
      });

      return res.json({
        response,
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async delete(req, res) {
    try {
      const schema = Yup.object().shape({
        id: Yup.string().required(),
      });

      if (!(await schema.isValid(req.query))) {
        return res.json({ error: 'Validation fail' });
      }

      const deleted = await User.destroy({
        where: {
          id: req.query.id,
        },
      });

      if (!deleted) {
        return res.status(400).json({
          error: 'User cant be deleted',
        });
      }

      return res.json({
        deleted,
      });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export default new UserController();
