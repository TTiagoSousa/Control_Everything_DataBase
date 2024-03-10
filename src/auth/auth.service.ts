import { Injectable } from '@nestjs/common';
import { signup_User } from './helpers/user/signup';
import { signup_dto } from 'src/user/dto/signup.dto';
import { signin_employee_dto } from 'src/employee/dto/signin.employee.dto';
import { signin_Employee } from './helpers/employee/signin';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
  ) {}

  async signup_User(dto: signup_dto) {
    const result = await signup_User(dto);
    return result;
  }

  async signin_Employee(dto: signin_employee_dto, req, res) {
    const result = await signin_Employee(dto, this.jwt, req, res);
    return result;
  }

}
