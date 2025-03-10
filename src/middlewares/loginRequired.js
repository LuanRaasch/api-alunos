/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    res.status(401).json({
      errors: ['Login required'],
    });
  };

  const [texto, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const {id, email} = dados;

    const user = await User.findOne({
      where: {
        id,
        email
      },
    });

    if(!user){
      res.status(401).json({
        errors: ['Usuário Inválido'],
      });
    };

    req.userId =  id;
    req.userEmail =  email;
    return next();
  } catch (error) {
    res.status(401).json({
      errors: [`Token expirado ou inválido: ${error}.`],
    });
  }
};
