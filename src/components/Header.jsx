import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = event => {
    setIsChecked(event.target.checked);
  };
  const handleCloseMenu = event => {
    setIsChecked(false);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  return (
    <header className="navbar">
      <div className="navbar_icons">
        <Link to="https://www.instagram.com/uwudarkray/" target="_blank" ><div className="navbar_icons_instagram"/></Link>
        <Link to="https://t.me/harinay" target="_blank" ><div className="navbar_icons_weblancer"/></Link>
        <Link to="https://www.weblancer.net/users/uwudarkray/" target="_blank" ><div className="navbar_icons_telegram"/></Link>
      </div>
      <Link smooth to="/#home"><div className="navbar_logo">Vladyslav Taimasov</div></Link>
      <input class="side-menu" type="checkbox" id="side-menu" onChange={handleChange} checked={isChecked}/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        <nav class="nav">
            <ul class="menu">
                <li><Link smooth to="/#home" onClick={handleCloseMenu}>{t('menu.home')}</Link></li>
                <li><Link smooth to="/#about" onClick={handleCloseMenu}>{t('menu.about')}</Link></li>
                <li><Link smooth to="/#projects" onClick={handleCloseMenu}>{t('menu.portfolio')}</Link></li>
                <li><Link smooth to="/#contact" onClick={handleCloseMenu}>{t('menu.contact')}</Link></li>
                <div className="lang">   
                  <div className={i18n.language === 'en' ? "lang_btn active" : "lang_btn"}    onClick={() => changeLanguage('en')}>en</div >
                  <div className={i18n.language === 'uk_UA' ? "lang_btn active" : "lang_btn"}  onClick={() => changeLanguage('uk_UA')}>ua</div >
                </div>
            </ul>    
        </nav>
      </header>
  );
};

export default Header;