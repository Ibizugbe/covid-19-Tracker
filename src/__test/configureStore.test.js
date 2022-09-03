import { resultReducer } from '../redux/data/fetchData';

it('should render the store', () => {
  expect(resultReducer(undefined, { type: undefined })).toEqual({});
});
