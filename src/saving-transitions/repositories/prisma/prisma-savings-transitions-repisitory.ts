import { Prisma, SavingTransition } from "@prisma/client";
import { prisma } from '../../../lib/prisma';
import { SavingTransitionRepository } from "../savings-transitions-repisitory";

export class PrismaSavingTransitionRepository implements SavingTransitionRepository{

  async create(data: Prisma.SavingTransitionUncheckedCreateInput) {
    const SavingTransiton = await prisma.savingTransition.create({
      data,
    })

    return SavingTransiton
  }

  async countByUserId(userId: string): Promise<number> {
   
    const count = await prisma.savingTransition.count({
      where: {
        createdById: userId,
      },
    });
    return count;
  }

  async getByUserIdWithPagination(userId: string, take: number, skip: number): Promise<SavingTransition[]> {
    const transitions = await prisma.savingTransition.findMany({
      where: {
        createdById: userId,
      },
      orderBy: {
        date: 'asc',
      },
      take,
      skip,
    });

    return transitions;
  }

  async findAll(userId: string): Promise<SavingTransition[]>{
    const savingTransitions = await prisma.savingTransition.findMany({
      where:{
        createdById: userId,
        isActive: true,
      },
    })

    return savingTransitions
  }

  async findByTransitionId(transitionId: string): Promise<SavingTransition | null> {
    const transition = await prisma.savingTransition.findUnique({
      where: {
        id: transitionId,
      },
    });
  
    return transition;
  }

  async save(userId: string, data: Prisma.SavingTransitionUpdateInput){
    const transitionID = data.id?.toString();
    
    const Transition = await prisma.savingTransition.update({
      where: {
        id: transitionID,
        createdById: userId,
      },
      data,
    });

    return Transition;
  }
}