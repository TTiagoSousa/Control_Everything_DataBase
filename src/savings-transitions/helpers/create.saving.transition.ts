import { PrismaSavingsTransitionsRepository } from "../repositories/prisma/prisma-savings-transitions-repisitory";
import { createSavingTransition_dto } from "../dto/create.savings.transition.dto";
import { BadGatewayException } from "@nestjs/common";
import { containsOnlyLettersAndNumbers } from "src/utils/text/contains.only.letters.and.numbers";
import { isValidHour } from "src/utils/hour/is.valid.hour";
import { isValidDate } from "src/utils/date/date.validation";
import { validateCurrencyByCode } from "src/utils/currency/validate.currency";

export async function CreateSavingTransition (
  dto: createSavingTransition_dto,
  userId: string,
) {

  const SavingsTransitionRepository = new PrismaSavingsTransitionsRepository();

  const { transitionType, data, platform, amount, hour, currencyType, description } = dto;

  const count = await SavingsTransitionRepository.countByUserId(userId)

  const nextNumber = count + 1;
  const lastTransitionID = `ST${String(nextNumber).padStart(2, '0')}`

  let transitionAmount = amount;
  
  if (transitionType === 'DEPOSIT') {
    transitionAmount = Math.abs(amount);
  } else if (transitionType === 'WITHDRAWAL') {
    transitionAmount = -amount;
  }

  if(!containsOnlyLettersAndNumbers(platform)) {
    throw new BadGatewayException('Platform name must contain only letters and numbers')
  }

  if(!isValidHour(hour)) {
    throw new BadGatewayException('Invalid hour')
  }

  if(!isValidDate(data)) {
    throw new BadGatewayException('Invalid data')
  }

  if (!await validateCurrencyByCode(currencyType)) {
    throw new BadGatewayException('Invalid currency type');
  }

  const savingTransition = await SavingsTransitionRepository.create({
    transitionID: lastTransitionID,
    transitionType, // Alterado de transitiontype para transitionType para corresponder ao DTO
    data,
    hour,
    platform,
    amount: transitionAmount,
    currencyType,
    createdById: userId,
    description: description ,
    isActive: true,   
  })

  return { savingTransition };
} 