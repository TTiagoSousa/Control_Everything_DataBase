import { Prisma, SavingTransition } from "@prisma/client";

export interface SavingTransitionRepository {
  create(data: Prisma.SavingTransitionUncheckedCreateInput): Promise<SavingTransition>;
  countByUserId(userId: string): Promise<number>;
  getByUserIdWithPagination(userId: string, take: number, skip: number): Promise<SavingTransition[]>;
  findByTransitionId(id: string): Promise<SavingTransition | null>;
  save(userId: string, data: Prisma.SavingTransitionUpdateInput): Promise<SavingTransition>;
} 