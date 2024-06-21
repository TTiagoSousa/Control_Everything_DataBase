import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { BadGatewayException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hashPassword } from "src/utils/password/hashPassword";
import { isStrongPassword } from 'src/utils/password/is.password.strong';

export async function resetPasswordUser(
  jwt: JwtService,
  token: string,
  newPassword: string
) {

  const payload = jwt.verify(token);
  const userEmail = payload.email;

  const usersRepository = new PrismaUsersRepository();
  const user = await usersRepository.findUserByEmail(userEmail);

  if (!user) {
    throw new NotFoundException('User not found');
  }

  if (!isStrongPassword(newPassword)) {
    throw new BadGatewayException('Passwords Weak')
  }

  const hashedPassword = await hashPassword(newPassword);

  await usersRepository.save({
    ...user,
    hashedPassword
  });
}