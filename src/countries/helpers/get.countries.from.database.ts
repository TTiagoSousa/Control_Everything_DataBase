import { PrismaCountriesRepository } from '../repositories/prisma/prisma-countries-repository';

export async function GetCoutriesFromDataBase() {

  const countriesRepository = new PrismaCountriesRepository();

  try{

    const countries = await countriesRepository.findAll();

    return countries
    
  }catch(error) {

  }
}