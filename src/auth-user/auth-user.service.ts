import { Injectable } from '@nestjs/common';
import { signupUser } from './helpers/sign.up.user';
import { signup_dto } from 'src/user/dto/sing.up.user.dto';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/email/email.service';
import { sendResetPasswordEmail } from './helpers/email/send.reset.password.email';
import { signin_user_dto } from 'src/user/dto/sign.in.user.dto';
import { signinUser } from './helpers/sign.in.user';
import { resetPasswordUser } from './helpers/reset.password.user';
import { activeUserAccount } from './helpers/active.user.account';

@Injectable()
export class AuthUserService {
  constructor(
    private readonly emailService: EmailService,
    private readonly jwt: JwtService,
  ) {}

  async signupUser(dto: signup_dto) {
    const result = await signupUser(dto, this.jwt, this.emailService);
    return result;
  }

  async sendResetPasswordEmail(email: string) {
    const result  = await sendResetPasswordEmail(email, this.emailService, this.jwt);
    return result;
  }

  async signinUser(dto: signin_user_dto, req, res) {
    const result = await signinUser(dto, this.jwt, req, res);
    return result;
  }

  async resetPasswordUser( newPassword: string, token: string) {
    const result  = await resetPasswordUser(this.jwt, newPassword, token);
    return result;
  }

  async activeUserAccount(token: string) {
    const result = await activeUserAccount(this.jwt, token);
    return result;
  }
}
