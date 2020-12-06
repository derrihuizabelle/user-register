import UserService from '../services/UserService';

class UserController {
  async show(req, res) {
    try {
      const response = await UserService.show(req.query.id);
      return res.status(200).json({ response });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(req, res) {
    try {
      const response = await UserService.index();
      return res.status(200).json({ response });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const response = await UserService.store(req.body);
      return res.status(200).json({ response });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const response = await UserService.update(req.body);
      return res.status(200).json({ response });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const response = await UserService.delete(req.query.id);
      return res.status(200).json({ response });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
