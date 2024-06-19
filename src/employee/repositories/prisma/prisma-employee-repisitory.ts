import { Prisma, Employee } from "@prisma/client";
import { EmployeeRepository } from "../employee-repository";
import { prisma } from '../../../lib/prisma';

export class PrismaEmployeeRepository implements EmployeeRepository{

  async create(data: Prisma.EmployeeUncheckedCreateInput) {
    const employee = await prisma.employee.create({
      data,
    })

    return employee
  }

  async findByEmail(email: string) {
    const employee = await prisma.employee.findUnique({
        where: {
            email
        },
    });

    return employee;
  }

  async findByEmployeeNumber(employeeNumber: number): Promise<Employee | null> {
    const employee = await prisma.employee.findUnique({
      where: {
        employeeNumber,
      },
    });

    return employee;
  }

  async findEmployeeById(id: string): Promise<Employee | null> {
    return prisma.employee.findUnique({
      where: {
        id,
      },
    });
  }
}