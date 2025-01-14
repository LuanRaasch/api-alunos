import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luan',
      sobrenome: 'Carlos',
      email: 'luanraasch@outlook.com',
      idade: 25,
      peso: 72.3,
      altura: 1.70
    });

    res.json(novoAluno);
  };
};

export default new HomeController();
