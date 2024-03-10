import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { Request } from 'express';
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getMyUser(@Param() params: { id: string }, @Req() req: Request) {
    return this.employeeService.getMyEmployeeDetauls(params.id, req);
  }
}
