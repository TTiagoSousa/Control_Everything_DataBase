import { Prisma, SavingsTransitions } from "@prisma/client";

export interface SavingsTransitionRepository {
  create(data: Prisma.SavingsTransitionsUncheckedCreateInput): Promise<SavingsTransitions>;
  countByUserId(userId: string): Promise<number>;
  findMany(userId: string): Promise<SavingsTransitions[]>
} 