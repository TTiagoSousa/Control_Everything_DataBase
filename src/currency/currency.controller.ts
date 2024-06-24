import { Controller, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post('upload-currencies-to-database')
  async createCurrency() {
    const updatedCurrencies = await this.currencyService.uploadCurrenciesToDatabase();
    return { updatedCurrencies };
  }
}
