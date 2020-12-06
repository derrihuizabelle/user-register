import User from '../models/User';

class UserService {
  async index() {
    const userList = await User.findAll();

    if (!userList) {
      throw new Error('Empty list');
    }

    return userList;
  }

  async show(id) {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error('User dont exist');
    }

    return user;
  }

  async store(request) {
    const userExists = await User.findOne({
      where: {
        email: request.email,
      },
    });

    if (userExists) {
      throw new Error('User already exist');
    }

    const { name, email } = await User.create({ ...request });
    return {
      name,
      email,
    };
  }

  async update(request) {
    const userExists = await User.findOne({
      where: {
        email: request.email,
      },
    });

    if (!userExists) {
      throw new Error('User dont exist');
    }

    const { name, email } = await User.update(request, {
      where: { id: userExists.id },
    });

    return { name, email };
  }

  async delete(id) {
    const userExists = await User.findByPk(id);

    if (!userExists) {
      throw new Error('User dont exist');
    }

    const deleted = await User.destroy({
      where: {
        id,
      },
    });

    if (!deleted) {
      throw new Error('User cant be deleted');
    }

    return deleted;
  }
}

export default new UserService();
