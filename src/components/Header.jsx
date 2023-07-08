import React from 'react';

const Header = () => {

  return (
    <header className="navbar">
      <div className="navbar_icons">
        <div className="navbar_icons_instagram"/>
        <div className="navbar_icons_weblancer"/>
        <div className="navbar_icons_telegram"/>
      </div>
      <div className="navbar_logo">Vladyslav Taimasov</div>
      <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav class="nav">
            <ul class="menu">
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
      </header>
  );
};

export default Header;