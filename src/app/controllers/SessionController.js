import SessionService from '../services/SessionService';

class SessionController {
  async store(req, res) {
    try {
      const response = await SessionService.store(req.body);
      return res.status(200).json({ ...response });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new SessionController();
