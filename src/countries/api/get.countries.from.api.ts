import { BadRequestException } from '@nestjs/common';
import axios from 'axios';

export async function getCountriesFromApi() {

  const apiUrl: string = process.env.Countrieds_Api;

  if (!apiUrl) {
    throw new BadRequestException("API URL is not defined in the environment variables.")
  }

  try {

    const response = await axios.get(apiUrl);

    return response.data

  } catch (error) {
    if (axios.isAxiosError(error)) {

      // Handle Axios-specific errors
      return `Error: ${error.response?.status} - ${error.response?.statusText}`;

    } else {

      // Handle other types of errors
      return `Error: ${error.message}`;
    }
  }

}