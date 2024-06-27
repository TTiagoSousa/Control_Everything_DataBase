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

  async findByCode(short_code: string) {
    const currencyID = await prisma.currency.findUnique({
      where: {
        short_code
      },
    });

    return currencyID;
  }

  async findAll(){
    const currencies = await prisma.currency.findMany();

    return currencies;
  }

  async updateRate(short_code: string, rate: number) {
    const updatedCurrency = await prisma.currency.update({
      where: {
        short_code,
      },
      data: {
        rate,
      },
    });

    return updatedCurrency;
  }

  async findByID(id: string) {
    const currencyID = await prisma.currency.findUnique({
      where: {
        id
      },
    });

    return currencyID;
  }
}
