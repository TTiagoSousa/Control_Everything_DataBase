import { Injectable } from '@nestjs/common';
import { uploadCurrencies } from './helpers/upload.currencies';
import { updateCurrenciesRate } from './helpers/update.currenies.rate';
import { GetCurrencyFromDataBase } from './helpers/get.currencies.from.database';

@Injectable()
export class CurrencyService {

  async uploadCurrencies() {
    const result = await uploadCurrencies();
    return result;
  }

  async updateCurrenciesRate() {
    const result = await updateCurrenciesRate();
    return result;
  }

  async GetCurrencyFromDataBase() {
    const result = await GetCurrencyFromDataBase();
    return result;
  }
}
