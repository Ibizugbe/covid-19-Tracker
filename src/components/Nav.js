import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsMicFill, BsFillGearFill } from 'react-icons/bs';
import './nav.css';

function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className="p-2 px-lg-4 py-lg-3">
          <ul className="nav-ul">
            <li className="nav-link">
              {
                window.location.pathname === '/'
                  ? (
                    <span>Home</span>
                  ) : (
                    <button type="button" className="btn bg-dark text-white px-2" onClick={() => navigate(-1)}>Back</button>
                  )
              }
            </li>
            <li className="nav-link covid-header">
              COVID Statitics
            </li>
            <li className="nav-link">
              <span className="pe-3"><BsMicFill /></span>
              <span><BsFillGearFill /></span>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
