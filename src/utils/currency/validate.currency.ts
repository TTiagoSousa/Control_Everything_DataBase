import { GetCurrencyFromDataBase } from "src/currency/helpers/get.currencies.from.database";

export async function validateCurrencyByCode(currencyCode: string): Promise<boolean> {
  try {
    const currencies = await GetCurrencyFromDataBase();
    const currency = currencies.find(curr => curr.code === currencyCode);
    return !!currency; 
  } catch (error) {
    console.error('Error validating currency by code:', error);
    throw new Error('Failed to validate currency');
  }
}
