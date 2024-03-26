import { Injectable } from '@nestjs/common';
import { uploadCurrencies } from './helpers/upload.currencies';
import { updateCurrenciesRate } from './helpers/update.currenies.rate';

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
}
