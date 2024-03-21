import axios from 'axios';
import { PrismaCountriesRepository } from '../repositories/prisma/prisma-countries-repository';

export async function updateOrUploadCountriesToDatabase() {
  
  const countriesRepository = new PrismaCountriesRepository();
  const apiUrl: string = process.env.Countries_Api;

  try {
    try {
      
      // Deletar países existentes do banco de dados
      const deleteInfo = await countriesRepository.delete();
    } catch (deleteError) {
      console.error('Erro ao excluir países:', deleteError);
    }

    // Fazer requisição HTTP GET para a API
    const response = await axios.get(apiUrl);
    const countriesData = response.data;

    // Processar cada país
    const countries = countriesData.map((country: any) => ({
      nameEn: country.name.common, // Nome oficial em inglês
      namePt: country.translations.por.common, // Nome comum em português
      flag: country.flags[1],
    }));

    // Inserir os países atualizados no banco de dados
    for (const country of countries) {
      try {
        await countriesRepository.create({
          countryNameEn: country.nameEn,
          countryNamePt: country.namePt,
          CoutryFlag: country.flag,
        });
      } catch (insertError) {

      }
    }
  } catch (error) {
    console.error('Erro ao atualizar ou enviar países:', error);
  }
}