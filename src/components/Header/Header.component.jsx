import React, { useState } from 'react';
import classNames from 'classnames';
import './styles.scss';

const Header = (props) => {

  const [menuOpen, toggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    toggleMenu(prevMenuOpen => !prevMenuOpen);
  }

  const navLinksClassNames = classNames({
    'header__nav__links': true,
    'open': menuOpen
  });

  const menuLinkClassNames = classNames({
    'header__nav__link': true,
    'fade': menuOpen
  });

  const burgerMenuClassNames = classNames({
    'burger-menu': true,
    'open': menuOpen
  });

  return (
    <header className='header'>
      <div className='container'>
        <div className='logo-wrapper'>
          <h1>Dr. Luan</h1>
        </div>
        <nav className='header__nav'>
          <ul className={navLinksClassNames}>
            <li className={menuLinkClassNames}><a href='#'>About me</a></li>
            <li className={menuLinkClassNames}><a href='#'>Contact</a></li>
            <li className={menuLinkClassNames}><a href='#'>Projects</a></li>
          </ul>
          <div className={burgerMenuClassNames} onClick={toggleMenuHandler}>
            <div className='burger-menu__line'></div>
            <div className='burger-menu__line'></div>
            <div className='burger-menu__line'></div>
          </div>
        </nav>
      </div>
    </header >
  );
}

export default Header;