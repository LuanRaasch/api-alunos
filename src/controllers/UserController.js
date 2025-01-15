import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map( err  => err.message),
      });
    }
  };

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });//Só vai listar esses
      return res.json(users);
    } catch (error) {
      return res.json(error);
    };
  };

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(error);
    };
  };

  async update(req, res) {
    try {;
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      };

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (error) {
      return res.json(error);
    };
  };

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      };

      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.json(error);
    };
  };
};

export default new UserController();
