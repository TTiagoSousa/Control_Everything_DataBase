import { Injectable } from '@nestjs/common';
import { signinEmployee } from './helpers/sign.in.employee';
import { signin_employee_dto } from 'src/employee/dto/signin.employee.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthEmployeeService {
  constructor(
    private readonly jwt: JwtService,
  ) {}

  async signinEmployee(dto: signin_employee_dto, req, res) {
    const result = await signinEmployee(dto, this.jwt, req, res);
    return result;
  }

}
