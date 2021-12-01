import React from 'react';
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Food Order</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage} alt='a table full of food' />
      </div>
    </>
  );
};

export default Header;
