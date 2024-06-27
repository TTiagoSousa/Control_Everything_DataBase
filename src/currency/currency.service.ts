import { Injectable, Logger } from '@nestjs/common';
import { uploadCurrenciesToDatabase } from './helpers/upload.currencies.to.database';
import { updateCurrenciesRate } from './helpers/update.currencies.rate';
import { GetCurrencyFromDataBase } from './helpers/get.currencies.from.database';

@Injectable()
export class CurrencyService {

  async uploadCurrenciesToDatabase() {
    const result = await uploadCurrenciesToDatabase();
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
