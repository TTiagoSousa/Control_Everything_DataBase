import { Prisma, PrismaClient, Coutries} from "@prisma/client";
import { CoutriesRepository } from "../countries-repository";
import { prisma } from '../../../lib/prisma';

export class PrismaCountriesRepository implements CoutriesRepository{

  async create(data: Prisma.CoutriesUncheckedCreateInput) {
    const countries = await prisma.coutries.create({
      data,
    })
  
    return countries
  }

  async delete() {
    const deleteInfo = await prisma.coutries.deleteMany();
    return deleteInfo;
  }
  
  async findAll(){
    const country = await prisma.coutries.findMany();

    return country;
  }

}