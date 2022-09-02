import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaSearch } from 'react-icons/fa';
import fetchData, { fetchResult } from '../redux/data/fetchData';
import './covidLists.css';
import 'bootstrap/dist/css/bootstrap.css';

const DisplayLists = () => {
  const results = useSelector((state) => state.result);
  const dispatch = useDispatch();
  useEffect(() => {
    if (results.length === 0) {
      fetchData().then((response) => dispatch(fetchResult(response)));
    }
  }, [results.length, dispatch]);

  let covidCountry = results.filter((result) => result.continent === 'Africa');
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  covidCountry = covidCountry.filter((country) => country.country.includes(search));
  const navigate = useNavigate();
  const [searchValue, setsearchValue] = useState(search);

  const filterFunction = (e) => {
    navigate(e.target.value ? `?search=${e.target.value}` : '');
    setsearchValue(e.target.value);
  };

  return (
    <>

      <div className="container-fluid px-4 covid-contain">
        <ul className="row px-0">
          <div className="col-12">
            <h3 className="text-center">Africa</h3>
            <form className="form d-flex justify-content-center align-items-center">
              <div className="mb-3 border px-3 py-2">
                <input
                  className="search"
                  type="text"
                  value={searchValue}
                  placeholder="Search country"
                  onChange={filterFunction}
                />
                <FaSearch />
              </div>
            </form>
          </div>
          {covidCountry.map((country) => (
            <Link
              className="col-6 px-0"
              key={uuidv4()}
              to={{ pathname: `/country/${country.country}` }}
            >
              <div className="card mx-2 border-0 mb-3 p-3 my-card">
                <li className="list-items d-lg-flex">
                  <div className="card-image">
                    <img
                      src={country.country_flag}
                      alt="national flag"
                      className="img-fluid country-flag"
                    />
                  </div>
                  <div className="card-details px-3">
                    <h1 className="country-name">{country.country}</h1>
                    <h2 className="population d-inline">Population:</h2>
                    {' '}
                    <p className="country-population d-inline">{country.population.toLocaleString()}</p>
                  </div>
                </li>
              </div>
            </Link>
          ))}
        </ul>

      </div>
    </>
  );
};

export default DisplayLists;
