import { EmailService } from "src/email/email.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { isValidEmail } from "src/utils/email/is.valide.email";
import { BadRequestException } from "@nestjs/common";
import resetPasswordTemplate from "src/email/templates/reset.password.email";

export async function sendResetPasswordEmail(
  email: string, 
  emailService: EmailService,
  jwt: JwtService,
) {

  const activationBaseUrl = process.env.BASE_URL

  const usersRepository = new PrismaUsersRepository();
  
  if (!isValidEmail(email)) {
    throw new BadRequestException("Invalid email")
  }

  const foundUser = await usersRepository.findUserByEmail(email);

  if (!foundUser) {
    throw new BadRequestException('Something is wrong')
  }

  const resetToken = jwt.sign({ email }, { expiresIn: '1d' });
  const encodedToken = Buffer.from(resetToken).toString('base64');
  const resetPasswordLink = `${activationBaseUrl}/Reset_Password/${encodedToken}`;
  const html = resetPasswordTemplate(resetPasswordLink);  
    
  await emailService.sendEmail(email, 'reset password', html);
}