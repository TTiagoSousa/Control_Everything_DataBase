import { PrismaCountriesRepository } from '../repositories/prisma/prisma-countries-repository';

type TranslationMap = {
  [key: string]: string;
};

const translationMap: TranslationMap = {
  pt: 'countryNamePt',
  en: 'countryNameEn',
};

export async function getCountriesFromDataBaseBasedOnLanguage(
  language: string
) {
  const countriesRepository = new PrismaCountriesRepository();

  try {
    const countries = await countriesRepository.findAll();

    if (!(language in translationMap)) {
      throw new Error(`Idioma '${language}' não suportado`);
    }

    const mappedCountries = countries.map(country => {
      const translatedField = translationMap[language];
      return {
        id: country.id,
        countryName: country[translatedField],
        countryFlag: country.CoutryFlag 
      };
    });

    const sortedCountries = mappedCountries.sort((a, b) =>
      a.countryName.localeCompare(b.countryName)
    );

    return sortedCountries;
  } catch (error) {
    console.error('Erro ao obter países do banco de dados:', error);
    throw error;
  }
}