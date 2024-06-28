import { PrismaCurrencyRepository } from "src/currency/repository/prisma/prisma-currency-repisitory";
import { PrismaSavingTransitionRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";
import { PrismaPlatformRepository } from "src/platforms/repositories/prisma/prisma-platform-repisitory";

export async function getAllSavingsTransitionsWithPagination(userId: string, perPage?: number, page?: number) {

  const SavingsTransitionRepository = new PrismaSavingTransitionRepository();
  const CurrencyRepository = new PrismaCurrencyRepository();
  const PlatformRepository = new PrismaPlatformRepository();

  const pagination = {
    take: parseInt(String(perPage), 10) || 10, 
    skip: (page - 1) * (parseInt(String(perPage), 10) || 10) || 0, 
  };

  const savingsTransitions = await SavingsTransitionRepository.getByUserIdWithPagination(userId, pagination.take, pagination.skip);

  const transitions = await Promise.all(
    savingsTransitions.map(async (transition) => {
      const currency = await CurrencyRepository.findByID(transition.currencyTypeID);
      const platform = await PlatformRepository.findPlatformByID(transition.platformID)
      
      return { ...transition, currencyCode: currency.short_code, platform: platform.name, platformIMG: platform.image };
    })
  );

  return transitions;
}