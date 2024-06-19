import { Controller, Get, Post } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('get-coutries-from-api')
  async getCountriesFromApi() {
    const countries = await this.countriesService.getCountriesFromApi();
    return countries;
  }

  @Post('upload-countries-to-database')
  async uploadCountriesToDataBase() {
    const countries = await this.countriesService.uploadCountriesToDataBase();
    return countries;
  }
}
