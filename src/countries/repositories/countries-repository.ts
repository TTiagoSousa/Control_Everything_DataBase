import { Prisma, Countries } from "@prisma/client";

export interface CoutriesRepository {
  create(data: Prisma.CountriesUncheckedCreateInput): Promise<Countries>;
}