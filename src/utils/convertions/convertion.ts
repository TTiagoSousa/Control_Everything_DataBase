import { BadRequestException } from "@nestjs/common";
// import { getSinglePriceCrypto } from "src/crypto-analysis/helpers/get.single.price";
import { PrismaCurrencyRepository } from "src/currency/repository/prisma/prisma-currency-repisitory";
import { roundToFixed } from "src/utils/numbers/round.to.fixed";

interface ConversionOptions {
  baseCurrency: string;
}

const cryptoSymbols: Record<string, string> = {
  Qwsogvtv82FCd: 'BTC',
  razxDUgYGNAdQ: 'ETH',
  WcwrkfNI4FUAe: 'BNB',
};


export async function convertTotalToCurrency(
  total: number,
  targetConversion: string,
  options: ConversionOptions,
) {
  
  const CurrencyRepository = new PrismaCurrencyRepository();

  const { baseCurrency } = options;
  
  if (targetConversion in cryptoSymbols) {
    const cryptoSymbol = cryptoSymbols[targetConversion];

    const cryptoPriceUSD = 0
    const baseCurrencyInfo = await CurrencyRepository.findByID(baseCurrency);

    const targetRate = baseCurrencyInfo.rate;
    const totalInBaseCurrency = total / targetRate;
    const totalConverted = totalInBaseCurrency / cryptoPriceUSD;

    const roundedResult = roundToFixed(totalConverted, 5);

    return { value: roundedResult, targetSymbol: cryptoSymbol };

  } else{

    const selectedCurrencyInfo = await CurrencyRepository.findByID(targetConversion);
    const baseCurrencyInfo = await CurrencyRepository.findByID(baseCurrency);

    console.log(selectedCurrencyInfo)

    if (!selectedCurrencyInfo) {
      throw new BadRequestException("Invalid target currency ID");
    }
    if (!baseCurrencyInfo) {
      throw new BadRequestException("Invalid base currency ID");
    }

    const targetRateUSD = selectedCurrencyInfo.rate; // Taxa de conversão USD/XXX

    // Converter total para dólares
    const totalInUSD = total / baseCurrencyInfo.rate;

    // Converter de dólares para a moeda escolhida
    const totalConverted = totalInUSD * targetRateUSD;

    const roundedResult = roundToFixed(totalConverted, 2);

    return { value: roundedResult, targetSymbol: selectedCurrencyInfo.symbol };
  }
}