import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import laptopImage from '../../assets/laptop.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Web Store</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={laptopImage} alt='Tech' />
      </div>
    </Fragment>
  );
};

export default Header;