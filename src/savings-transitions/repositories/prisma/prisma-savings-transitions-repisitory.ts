import { Prisma, SavingsTransitions } from "@prisma/client";
import { prisma } from '../../../lib/prisma';
import { SavingsTransitionRepository } from "../savings-transitions-repisitory";

export class PrismaSavingsTransitionsRepository implements SavingsTransitionRepository{

  async create(data: Prisma.SavingsTransitionsUncheckedCreateInput) {
    const SavingTransiton = await prisma.savingsTransitions.create({
      data,
    })

    return SavingTransiton
  }

  async countByUserId(userId: string): Promise<number> {
   
    const count = await prisma.savingsTransitions.count({
      where: {
        createdById: userId,
      },
    });
    return count;
  }

  async findMany(userId: string): Promise<SavingsTransitions[]> {
    const totalByCurrencyType = await prisma.savingsTransitions.findMany({
      where: {
        createdById: userId,
        isActive: true,
      },
    })

    return totalByCurrencyType
  }
}