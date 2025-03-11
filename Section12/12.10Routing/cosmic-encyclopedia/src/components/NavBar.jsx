import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({data}) => {
  return (
    <nav className='navbar'>
        <Link
            to='/'
            className='navbar-link'
        >
            Home
        </Link>
        {
            data.map(dataElement => (
                <Link
                    key={dataElement.id}
                    to={`/content/${dataElement.id}`}
                    className='navbar-link'
                >
                    {dataElement.title}
                </Link>
            ))
        }
    </nav>
  );
};

export default NavBar;