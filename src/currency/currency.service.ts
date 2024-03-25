import { Injectable } from '@nestjs/common';
import { uploadCurrencies } from './helpers/upload.currencies';

@Injectable()
export class CurrencyService {

  async uploadCurrencies() {
    const result = await uploadCurrencies();
    return result;
  }

}
