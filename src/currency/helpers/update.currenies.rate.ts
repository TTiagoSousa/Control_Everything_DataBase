import axios from 'axios';
import { PrismaCurrencyRepository } from '../repository/prisma/prisma-currency-repisitory'; 

export async function updateCurrenciesRate() {

  const Currency_Api_Key: string = process.env.Currency_Api_Key;

  const currencyRepository = new PrismaCurrencyRepository();

  const currencyRateUrl  = `https://api.currencyapi.com/v3/latest?apikey=${Currency_Api_Key}&currencies=`;
  const responseCurrencyRate = await axios.get(currencyRateUrl);
  const currencyRates = responseCurrencyRate.data.data;

  for (const currencyCode in currencyRates) {
    if (Object.prototype.hasOwnProperty.call(currencyRates, currencyCode)) {
      const { code, value: newRate } = currencyRates[currencyCode];

      // Procurar a moeda no banco de dados pelo código
      const existingCurrency = await currencyRepository.findByCode(code);

      if (existingCurrency) {
        // Se a moeda existir no banco de dados e a taxa for diferente, atualize a taxa
        if (existingCurrency.rate !== newRate) {
          await currencyRepository.updateRate(existingCurrency.id, newRate.toString());
          console.log(`Taxa de ${code} atualizada para ${newRate}`);
        }
      } else {
        // Se a moeda não existir no banco de dados, você pode optar por criar uma nova entrada ou ignorá-la
        console.log(`Moeda ${code} não encontrada no banco de dados.`);
      }
    }
  }
}