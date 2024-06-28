import { PrismaSavingTransitionRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";

export async function getTotalNumberOfSavingTransitions(
  userId: string,
) {
  
  const SavingsTransitionRepository = new PrismaSavingTransitionRepository();

  const totalCount = await SavingsTransitionRepository.countByUserId(userId)

  return totalCount;
}