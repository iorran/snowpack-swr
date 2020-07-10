import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nominations">Nominations</Link>
          </li>
        </ul>
      </nav>{' '}
    </header>
  );
};
