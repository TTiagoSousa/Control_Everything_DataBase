import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { Roles } from 'src/employee/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { EmployeeRole } from '@prisma/client';
import { EmployeeRolesGuard } from 'src/employee/guards/roles.guard';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post('upload-currencies')
  @UseGuards(JwtAuthGuard, EmployeeRolesGuard)
  @Roles(EmployeeRole.ADMIN)
  async createCurrency() {
    const updatedCurrencies = await this.currencyService.uploadCurrencies();
    return { updatedCurrencies };
  }

  @Post('update-currencies-rate')
  @UseGuards(JwtAuthGuard, EmployeeRolesGuard)
  @Roles(EmployeeRole.ADMIN)
  async updateCurrenciesRate() {
    const updateCurrenciesRate = await this.currencyService.updateCurrenciesRate();
    return { updateCurrenciesRate };
  }

  @Get('get-all-currencies')
  async getAllCurrencies() {
    const currencies = await this.currencyService.GetCurrencyFromDataBase();
    return { currencies };
  }
}
