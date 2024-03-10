import { Injectable } from '@nestjs/common';
import { getMyEmployeeDetauls } from './helpers/get.my.employee.details';
import { Request } from 'express';

@Injectable()
export class EmployeeService {

  async getMyEmployeeDetauls(id: string, req: Request) {
    const result = await getMyEmployeeDetauls(id, req);
    return result;
  }

}
