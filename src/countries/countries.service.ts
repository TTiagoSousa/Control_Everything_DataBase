import { Injectable } from '@nestjs/common';
import { getCountriesFromApi } from './helpers/api/get.countries.from.api';
import { uploadCountriesToDataBase } from './helpers/upload.countries.to.database';
import { getCountriesFromDataBaseBasedOnLanguage } from './helpers/get.countries.from.database.based.on.language';

@Injectable()
export class CountriesService {

  async getCountriesFromApi() {
    const result = await getCountriesFromApi();
    return result
  }

  async uploadCountriesToDataBase() {
    const result = await uploadCountriesToDataBase();
    return result
  }

  async getCountriesFromDataBaseBasedOnLanguage(language: string) {
    const result = await getCountriesFromDataBaseBasedOnLanguage(language);
    return result
  }
}
