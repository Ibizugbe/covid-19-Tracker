import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  useNavigate();
  console.log(window.location.pathname);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="nav-link">
              {
                window.location.pathname === '/'
                  ? (
                    <span>Home</span>
                  ) : (
                    <button type="button">Back</button>
                  )
              }
            </li>
            <li className="nav-link">
              <h1>COVID Statitics</h1>
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
