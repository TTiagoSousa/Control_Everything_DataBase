import { Prisma, Coutries } from "@prisma/client";

export interface CoutriesRepository {
  create(data: Prisma.CoutriesUncheckedCreateInput): Promise<Coutries>;
  delete(): Promise<Prisma.BatchPayload>;
  findAll(): Promise<Coutries[]>;
}