const FETCH_DATA = 'covid-data/data/FETCH_DATA';
const apiUrl = 'https://disease.sh/v3/covid-19/countries';

// store
const initialState = [];

// action
export const fetchResult = (payload) => ({
  type: FETCH_DATA,
  payload,
});

// fetch api
const fetchData = async () => {
  const result = [];
  const res = await fetch(apiUrl);
  const covidData = await res.json();
  covidData.map(({ countryInfo: { _id: id, flag }, ...data }) => {
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
    result.push(covidResults);
    return result;
  });

  return result;
};

// reducer
export const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default fetchData;
