import { JwtService } from "@nestjs/jwt";
import { Request, Response } from 'express';
import { PrismaEmployeeRepository } from "src/employee/repositories/prisma/prisma-employee-repisitory"; 
import { comparePasswords } from "src/utils/password/compare.passwords";
import { BadRequestException } from "@nestjs/common";
import { isValidEmail } from "src/utils/email/is.valide.email";
import { employeeCreateToken } from "src/utils/token/employee.signin.token"; 
import { signin_employee_dto } from "src/employee/dto/signin.employee.dto"; 

export async function signinEmployee (
  dto: signin_employee_dto,
  jwt: JwtService,
  req: Request,
  res: Response,
) {

  const { email, password, employeeNumber } = dto

  const employeesRepository = new PrismaEmployeeRepository();

  if (!isValidEmail(email)) {
    throw new BadRequestException('Invalid email')
  }

  const foundEmployeeByEmail = await employeesRepository.findByEmail(email);

  if (!foundEmployeeByEmail) {
    throw new BadRequestException('Something is wrong');
  }

  const foundEmployeeByEmployeeNumber = await employeesRepository.findByEmployeeNumber(employeeNumber);

  if (!foundEmployeeByEmployeeNumber) {
    throw new BadRequestException('Something is wrong');
  }

  const isMatch = await comparePasswords({
    password,
    hash: foundEmployeeByEmail.hashedPassword,
  })

  if (!isMatch) {
    throw new BadRequestException('Something is wrong');
  }

  if (!foundEmployeeByEmail.isActive && foundEmployeeByEmail) {
    throw new BadRequestException('Account not active');
  }

  const { token, refreshToken } = await employeeCreateToken({
    id: foundEmployeeByEmail.id,
    email: foundEmployeeByEmail.email,
    EmployeeRole: foundEmployeeByEmail.jobTitle
  });

  if (!token) {
    throw  new Error('Something went wrong');
  }

  res.cookie('token', token);
  res.cookie('refreshToken', refreshToken);

  return res.send({ token , message: 'Login successful',  });
}