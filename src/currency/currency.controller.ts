import { Controller, Get, Patch, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post('upload-currencies-to-database')
  async createCurrency() {
    const updatedCurrencies = await this.currencyService.uploadCurrenciesToDatabase();
    return { updatedCurrencies };
  }

  @Patch('update-currencies-rate')
  async updateCurrenciesRate() {
    const updatedCurrencies = await this.currencyService.updateCurrenciesRate();
    return { updatedCurrencies };
  }

  @Get('get-all-currencies')
  async getAllCurrencies() {
    const currencies = await this.currencyService.GetCurrencyFromDataBase();
    return { currencies };
  }
}
