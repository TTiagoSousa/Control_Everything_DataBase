import { Prisma, Countries } from "@prisma/client";

export interface CoutriesRepository {
  create(data: Prisma.CountriesUncheckedCreateInput): Promise<Countries>;
  findCountryByID(id:string): any;
  findAll(): Promise<Countries[]>;
}