import { Prisma, PrismaClient, Currency} from "@prisma/client";
import { CurrencyRepository } from "../currency-repository";
import { prisma } from '../../../lib/prisma';


export class PrismaCurrencyRepository implements CurrencyRepository{

  async create(data: Prisma.CurrencyUncheckedCreateInput) {
    const currency = await prisma.currency.create({
      data,
    })

    return currency
  }

  async delete() {
    const deleteInfo = await prisma.currency.deleteMany();
    return deleteInfo;
  }

  async updateRate(id: string, rate: string) {
    const numericRate = parseFloat(rate); // Converter a string para um número
    const currency = await prisma.currency.update({
      where: {
        id,
      },
      data: {
        rate: numericRate,
      },
    });
  
    return currency;
  }

  async findByCode(code: string) {
    const currencyCode = await prisma.currency.findUnique({
      where: {
        code
      },
    });

    return currencyCode;
  }

  async findAll(){
    const currencies = await prisma.currency.findMany();

    return currencies;
  }
}
