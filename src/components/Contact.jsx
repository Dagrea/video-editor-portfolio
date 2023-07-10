import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {

  const { t } = useTranslation();
  return (
    <div className="contact" id='contact'>
      <h1>{t('contact.name')}</h1>
      <div><p>{t('contact.text')}</p></div>
      <div><a href="mailto:vladik.taymasov@gmail.com"><p>E-mail: vladik.taymasov@gmail.com</p></a></div>
      <div><a href="https://t.me/harinay" target="_blank"><p>Telegram: t.me/harinay</p></a></div>
    </div>
  );
};

export default Contact;