import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaSearch } from 'react-icons/fa';
import fetchData, { fetchResult } from '../redux/data/fetchData';
import './covidLists.css';

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

      <div className="Search-sec">
        <h3 className="area">Africa</h3>
        <form className="form">
          <div className="search-bar">
            <input
              className="form-input"
              type="text"
              value={searchValue}
              placeholder="Search country"
              onChange={filterFunction}
            />
            <FaSearch />
          </div>
        </form>
        <ul className="list-country">
          {covidCountry.map((country) => (
            <Link
              className="a"
              key={uuidv4()}
              to={{ pathname: `/country/${country.country}` }}
            >
              <li className="list-details">
                <div className=" details">
                  <h1 className="name">{country.country}</h1>
                </div>
                <div>
                  <h2 className="population">Population:</h2>
                  {' '}
                  <p className="number">{country.population.toLocaleString()}</p>
                </div>
                <div className="photo">
                  <img
                    src={country.country_flag}
                    alt="national flag"
                    className="national-flag"
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayLists;
