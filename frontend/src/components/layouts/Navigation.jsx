import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <header className="primary-header d-flex">
        <div className="logo">
          <h1>
            <div className="logo-typo">YTK</div>
          </h1>
        </div>

        <nav className="navbarNav">
          <ul>
            <li className="">
              <Link to="/" className="">
                <span aria-hidden="true">00</span>
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="">
        <div className="text background">Hallo</div>
      </div>

      <Outlet />
    </>
  );
}

export default Navigation;
