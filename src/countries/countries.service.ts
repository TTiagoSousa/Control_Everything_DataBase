import { Injectable } from '@nestjs/common';
import { getCountriesFromApi } from './api/get.countries.from.api';

@Injectable()
export class CountriesService {

  async getCountriesFromApi() {
    const result = await getCountriesFromApi();
    return result
  }

}
