import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
      <div className="about" id='about'>
      <div className="about_text">
      <h1>{t('about.name')}</h1>
      <p>{t('about.text')}
      </p>
      </div>
      </div>
  );
};

export default About;