import { Prisma, PrismaClient, Countries} from "@prisma/client";
import { CoutriesRepository } from "../countries-repository";
import { prisma } from '../../../lib/prisma';

export class PrismaCountriesRepository implements CoutriesRepository{
  
  async create(data: Prisma.CountriesUncheckedCreateInput) {
    const countries = await prisma.countries.create({
      data,
    })
  
    return countries
  }

  async findCountryByID(id:string){
    const country = await prisma.countries.findUnique({
      where:{
        id
      }
    })

    return country;
  }

  async findAll(){
    const country = await prisma.countries.findMany();

    return country;
  }
}