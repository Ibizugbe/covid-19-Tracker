function Nav() {
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
                ): (
                  <button>Back</button>
                )
              }
            </li>
            <li className="nav-link">
              <h1>COVID Statitics</h1>
            </li>
            <li className="nav-link">
              <span className="mic"></span>
              <span className="settings"></span>
            </li>
          </ul>
        </nav>
      </header>
    </>
   );
}

export default Nav;