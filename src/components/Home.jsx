import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home" id='home'>
      <h1>{t('home.name')}</h1>
      <h3>{t('home.greeting')}</h3>
      <p>{t('home.text')}</p>
      <div className="rounded_avatar"></div>
      </div>
  );
};

export default Home;