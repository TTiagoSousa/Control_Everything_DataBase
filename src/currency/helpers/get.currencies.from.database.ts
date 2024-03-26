
import { BadGatewayException } from '@nestjs/common';
import { PrismaCurrencyRepository } from '../repository/prisma/prisma-currency-repisitory';

export async function GetCurrencyFromDataBase() {

  const currencyRepository = new PrismaCurrencyRepository();

  try {
    const currencies = await currencyRepository.findAll();
    return currencies;
  } catch (error) {
    console.error('Error fetching currencies:', error);
    throw new BadGatewayException('Failed to fetch currencies');
  }
}