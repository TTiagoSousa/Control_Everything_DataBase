import { Injectable } from '@nestjs/common';
import { signup_User } from './helpers/user/signup';
import { signup_dto } from 'src/user/dto/signup.dto';
import { signin_employee_dto } from 'src/employee/dto/signin.employee.dto';
import { signin_Employee } from './helpers/employee/signin';
import { JwtService } from '@nestjs/jwt';
import { activateAccount_User } from './helpers/user/activate.account';
import { EmailService } from 'src/email/email.service';
import { signin_User } from './helpers/user/signin';
import { signin_dto } from 'src/user/dto/signin.dto';
import { sendResetPasswordEmail } from './helpers/user/email/send.reset.password.email';
import { resetPassword } from './helpers/user/reset.password';

@Injectable()
export class AuthService {
  constructor(
    private readonly emailService: EmailService,
    private readonly jwt: JwtService,
  ) {}

  async signup_User(dto: signup_dto) {
    const result = await signup_User(dto, this.jwt, this.emailService);
    return result;
  }

  async signin_Employee(dto: signin_employee_dto, req, res) {
    const result = await signin_Employee(dto, this.jwt, req, res);
    return result;
  }

  async activateAccount_User(token: string) {
    const result = await activateAccount_User(this.jwt, token);
    return result;
  }

  async signin_User(dto: signin_dto, req, res) {
    const result = await signin_User(dto, this.jwt, req, res);
    return result;
  }

  async sendResetPasswordEmail(email: string) {
    const result  = await sendResetPasswordEmail(email, this.emailService, this.jwt);
    return result;
  }

  async resetPassword( newPassword: string, token: string) {
    const result  = await resetPassword(this.jwt, newPassword, token);
    return result;
  }
}
