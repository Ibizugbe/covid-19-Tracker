import axios from "axios";

const apiUrl = 'https://disease.sh/v3/covid-19/countries';

const fetchData = async () => {
  const covidData = [];
  const response = await axios.get(apiUrl);
  const myResponse = response.data;

  myResponse.map(({ countryInfo: { _id: id, flag }, ...data }) => {
    const covidResults = {
      continent: data.continent,
      country: data.country,
      country_id: id,
      country_flag: flag,
      total_cases: data.cases,
      total_deaths: data.deaths,
      total_recovered: data.recovered,
      total_active: data.active,
      total_tests: data.tests,
      population: data.population,
      todays_cases: data.todayCases,
      todays_deaths: data.todayDeaths,
      todays_recovered: data.todayRecovered,
    };

    covidData.push(covidResults);
    return covidData;
  });
  return covidData;
}

export default fetchData;