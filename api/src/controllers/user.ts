import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import UserServices from '../services/user';
import { UserDocument } from '../models/User';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const googleAuthenticate = async (
  request: Request,
  response: Response
) => {
  try {
    // data from passport done function
    console.log('req from controller', request);
    const userData = request
    // because userData: Express.User | undefined
    if (!userData) {
      response.json({ message: 'Cant find user with the email' });
      return;
    }
    const token = jwt.sign(
      {
        email: request.body.email,
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    response.json({token, userData})
  } catch (err) {
    console.log(err)
  }
};
