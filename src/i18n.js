import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          menu: {
            home: 'Home',
            about: 'About',
            portfolio: 'Portfolio',
            contact: 'Contact'
          },
          home: {
            name: 'VIDEO MAKING ᵘᵃ💙💛',
            greeting: 'Hi, I\'m Vladislav, a videographer/editor and motion graphic designer.',
            text: 'I have more than 4 years of experience in video editing and producing professional videos, dialogues, sound files and animations, with a deep understanding of video composition, digital software and video editing equipment.'
          },
          about: {
            name: 'About',
            text: `I have been studying Sony Vegas Pro 13.0/14.0/16.0 for four years.\n
Made compositions on the subject: 
- RobloxMeme YouTube
- Anime themes
- Advertising

After Effects - 6 months, I use the 2018 version. There are examples of work from orders. Compositions on the theme are made: 
- VapeShop advertising
- my own creation of INTRO for the YouTube channel


Skills and abilities💻🧠
✔️ work with text
✔️ color correction 
✔️ work with light 
✔️ mixing audio and video tracks
✔️ work with material from several cameras (also for cutting) 
✔️ sound equalization (for example, your voice and music in the background will be stable for listening)
✔️ I know how to work with chromecast 
✔️ modern transitions 
✔️ working with masks in motion
 ✔️ slowing down/speeding up video 
✔️ blur in the video 
✔️ I know how to work according to the script
✔️ video editing 

I have experience in creating 🎞
•advertising videos 
•gaming videos 
•slices from game footage 
•creation of highlights from gameplay videos
•work with large files`
          },
        portfolio: {
            name: 'Portfolio'
        },
        contact: {
            name: 'Contact',
            text: 'Ready for offers.'
        }
        }
      },
      uk_UA: {
        translation: {
          menu: {
            home: 'Головна',
            about: 'Про мене',
            portfolio: 'Портфоліо',
            contact: 'Контакти'
          },
          home: {
            name: 'МОНТАЖ ВІДЕО ᵘᵃ💙💛',
            greeting: 'Привіт, я Владислав, відеомейкер/монтажер та моушн-дизайнер.',
            text: 'Я маю понад 4 роки досвіду у відеомонтажі та виробництві професійних відео, діалогів, звукових файлів та анімації, з глибоким розумінням композиції відео, цифрового програмного забезпечення та обладнання для відеомонтажу.'
          },
          about: {
            name: 'Про мене',
            text: `Вивчав Sony Vegas Pro 13.0/14.0/16.0 протягом чотирьох років.
Зроблени композіціїї с тематики: 
- RobloxMeme YouTube
- Anime themes
- Advertising

After Effects - 6 місяців, користуюся 2018 версією. Є приклади робіт з замовлень. Зроблени композіціїї с тематики: 
- реклама VapeShop
- своє власне створення INTRO для канала YouTube


Вміння та навички💻🧠
✔️ робота з текстом
✔️ корекція кольору 
✔️ робота зі світлом 
✔️ зведення аудіо та відео доріжок
✔️ робота з матеріалом із декількох камер (також під нарізку) 
✔️ вирівнювання звуку (як, наприклад, ваш голос та музика на фоні будуть стабільні для прослуховування)
 ✔️ вмію працювати з хромокеєм 
✔️ сучасні переходи 
✔️ робота з масками у русі
 ✔️ уповільнення/прискорення відео 
✔️ блюр(Blur) у відео 
✔️ вмію працювати за сценарієм
✔️ монтаж відео 

Маю досвід у створенні 🎞
•рекламних відео 
•ігрових відео 
•нарізок з ігрових стримувань 
•створення хайлайтів із геймплейних відео
•робота з великими файлами`
          },
        portfolio: {
            name: 'Портфоліо'
        },
        contact: {
            name: 'Контакти',
            text: 'Готовий до пропозицій'
        }
        }
      }
    }
  });

export default i18n;