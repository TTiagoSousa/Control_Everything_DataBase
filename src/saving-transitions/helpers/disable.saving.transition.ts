import { PrismaSavingTransitionRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";

export async function disableSavingTransition(userId: string,transitionId: string) {

  const SavingsTransitionRepository = new PrismaSavingTransitionRepository();

  const existingTransition = await SavingsTransitionRepository.findByTransitionId(transitionId);

  await SavingsTransitionRepository.save(userId,{
    ...existingTransition,
    isActive: false,
  });

  return {
    message: 'Saving transition disabled successfully',
  };
};