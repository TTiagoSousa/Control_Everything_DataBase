import { JwtService } from "@nestjs/jwt";
import { signin_user_dto } from "src/user/dto/sign.in.user.dto";
import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { Request, Response } from 'express';
import { comparePasswords } from "src/utils/password/compare.passwords";
import { userCreateToken } from "src/utils/token/user.signin.token";
import { isValidEmail } from "src/utils/email/is.valide.email";
import { BadRequestException } from "@nestjs/common";

export async function signinUser (
  dto: signin_user_dto,
  jwt: JwtService,
  req: Request,
  res: Response,
) {

  const { email, password } = dto
  const usersRepository = new PrismaUsersRepository();
  
  if (!isValidEmail(email)) { 
    throw new BadRequestException('Invalid email')
  }

  const foundUser = await usersRepository.findUserByEmail(email);

  if (!foundUser) {
    throw new BadRequestException('Something is wrong');
  }

  const isMatch = await comparePasswords({
    password,
    hash: foundUser.hashedPassword,
  })

  if (!isMatch) {
    throw new BadRequestException('Something is wrong');
  }

  if (!foundUser.isActive && foundUser) {
    console.log(foundUser)
    throw new BadRequestException('Account not active');
  }

  const { token, refreshToken } = await userCreateToken({
    id: foundUser.id,
    email: foundUser.email,
  });

  if (!token) {
    throw  new Error('Something went wrong');
  }

  res.cookie('token', token);
  res.cookie('refreshToken', refreshToken);

  return res.send({ token, message: 'Login successful' });
}
