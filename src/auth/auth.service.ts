import { Injectable } from '@nestjs/common';
import { signup_User } from './helpers/user/signup';
import { signup_dto } from 'src/user/dto/signup.dto';
import { signin_employee_dto } from 'src/employee/dto/signin.employee.dto';
import { signin_Employee } from './helpers/employee/signin';
import { JwtService } from '@nestjs/jwt';
import { activateAccount_User } from './helpers/user/activate.account';
import { EmailService } from 'src/email/email.service';
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

}
