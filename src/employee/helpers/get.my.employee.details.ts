import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { PrismaEmployeeRepository } from '../repositories/prisma/prisma-employee-repisitory';

export async function getMyEmployeeDetauls(id: string, req: Request) {
  const employeeRepository = new PrismaEmployeeRepository()

  const employee = await employeeRepository.findEmployeeById(id);

  if (!employee) {
    throw new NotFoundException('User not found');
  }

  const foundUser = req.user as { id?: string };

  if (!foundUser || !foundUser.id) {
    throw new ForbiddenException('Invalid user in the request');
  }

  if (employee.id !== foundUser.id) {
    throw new ForbiddenException('You do not have permission to access this user.');
  }

  return { employee };
}