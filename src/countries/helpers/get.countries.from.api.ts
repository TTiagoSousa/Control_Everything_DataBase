import axios from 'axios';

export async function GetCoutriesFromAPI() {

  const apiUrl: string = process.env.Countries_Api;

  try {

    const response = await axios.get(apiUrl);

    const countries = response.data.map(country => ({
      name: country.name.common,
      flag: country.flags[1],
    })).filter(Boolean)
      .sort((a, b) => a.name.localeCompare(b.name));

      return countries
  } catch(error) {
    console.error('Error fetching or processing countries:', error);
  }

}