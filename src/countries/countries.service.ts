import { Injectable } from '@nestjs/common';
import { GetCoutriesFromAPI } from './helpers/get.countries.from.api';
import { updateOrUploadCountriesToDatabase } from './helpers/upload.update.countries.to.database';
import { GetCoutriesFromDataBase } from './helpers/get.countries.from.database';

@Injectable()
export class CountriesService {

  async GetCoutriesFromAPI() {
    const result = await GetCoutriesFromAPI();
    return result
  }

  async updateOrUploadCountriesToDatabase() {
    const result = await updateOrUploadCountriesToDatabase();
    return result
  }

  async GetCoutriesFromDataBase() {
    const result = await GetCoutriesFromDataBase();
    return result
  }
}
