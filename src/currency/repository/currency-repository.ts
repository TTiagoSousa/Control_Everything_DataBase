import { Currency, Prisma } from "@prisma/client";

export interface CurrencyRepository {
  create(data: Prisma.CurrencyUncheckedCreateInput): Promise<Currency>;
  delete(): Promise<Prisma.BatchPayload>;
  findByCode(code: string): Promise<Currency | null>;
  updateRate(id: string, rate: string):Promise<Currency | null>;
}