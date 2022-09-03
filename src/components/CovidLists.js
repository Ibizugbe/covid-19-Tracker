import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchData, { fetchResult } from '../redux/data/fetchData';
import './covidLists.css';
import 'bootstrap/dist/css/bootstrap.css';

const CovidLists = () => {
  const results = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const { name } = useParams();

  const selectedCountry = results.find((country) => country.country === name);
  useEffect(() => {
    if (selectedCountry.length === 0) {
      fetchData().then((res) => dispatch(fetchResult(res)));
    }
  });
  return (
    <>
      <div className="container-fluid covid-contain">
        <div className="continent">
          <h1 className="selected-name text-center">{name}</h1>
          <div className="img-div d-flex justify-content-center py-3">
            <img
              src={selectedCountry.country_flag}
              alt="national-flag"
              className="national-flag1"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="col-12 col-md-6 col-lg-4 table-div">
            <h2 className="text-center">Today&apos;s update</h2>
            <table className="table my-table">
              <thead>
                <tr>
                  <th>New Cases</th>
                  <th>Confirmed death</th>
                  <th>New Recoveries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedCountry.todays_cases.toLocaleString()}</td>
                  <td>{selectedCountry.todays_deaths.toLocaleString()}</td>
                  <td>{selectedCountry.todays_recovered.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-center">Total cases</h3>
            <table className="table my-table">
              <thead>
                <tr>
                  <th>Confirmed cases</th>
                  <th>Recovered</th>
                  <th>Active Cases</th>
                  <th>Total Tests</th>
                  <th>Deaths</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {selectedCountry.total_cases.toLocaleString()}
                  </td>
                  <td>
                    {selectedCountry.total_recovered.toLocaleString()}
                  </td>
                  <td>
                    {selectedCountry.total_active.toLocaleString()}
                  </td>
                  <td>
                    {selectedCountry.total_tests.toLocaleString()}
                  </td>
                  <td>
                    {selectedCountry.total_deaths.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default CovidLists;
