import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Roles } from 'src/employee/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { EmployeeRole } from '@prisma/client';
import { EmployeeRolesGuard } from 'src/employee/guards/roles.guard';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('get-coutries-from-api')
  async getCountriesData() {
    const countries = await this.countriesService.GetCoutriesFromAPI();
    return countries;
  }

  @Post('upload-update-countries')

  async updateOrUploadCountriesToDatabase() {
    await this.countriesService.updateOrUploadCountriesToDatabase();
    return { message: 'Update done successfully' };
  }

  @Get('get-coutries-from-database')
  async GetCountriesFromDataBase() {
    const countries = await this.countriesService.GetCountriesFromDataBase();
    return countries;
  }
}
