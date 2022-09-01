import React from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav>
          <ul className="nav-ul">
            <li className="nav-link">
              {
                window.location.pathname === '/'
                  ? (
                    <span>Home</span>
                  ) : (
                    <button type="button" onClick={() => navigate(-1)}>Back</button>
                  )
              }
            </li>
            <li className="nav-link covid-header">
              COVID Statitics
            </li>
            <li className="nav-link">
              <span className="mic" />
              <span className="settings" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
