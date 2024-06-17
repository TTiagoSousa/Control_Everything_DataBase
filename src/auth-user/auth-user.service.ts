import { Injectable } from '@nestjs/common';
import { signupUser } from './helpers/sign.up.user';
import { signup_dto } from 'src/user/dto/sing.up.user.dto';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/email/email.service';

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

}
