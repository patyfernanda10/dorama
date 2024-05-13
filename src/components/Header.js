import React from 'react';
import './Header.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>NETFLIX
              
            </div>

            <div className='header--user'>Usuário
                
            </div>
        </header>

    );
}