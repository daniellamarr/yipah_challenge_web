import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        CODE CREDIT
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Transactions
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
