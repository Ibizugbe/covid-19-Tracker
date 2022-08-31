const FETCH_DATA = 'covid-data/data/FETCH_DATA';

const fetchResult = (payload) => ({
  type: FETCH_DATA,
  payload,
});
const initialState = [];
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export { fetchResult, resultReducer };