import { Currency, Prisma } from "@prisma/client";

export interface CurrencyRepository {
  create(data: Prisma.CurrencyUncheckedCreateInput): Promise<Currency>;
  findByCode(id: string) : Promise<Currency | null>;
}