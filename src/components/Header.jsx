import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({color}) => {
  return (
    <header>
      <div className="logo" style={{color}}>
        CODE CREDIT
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{color}}>
              Transactions
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.defaultProps = {
  color: '#7c53B0'
}

export default Header;
