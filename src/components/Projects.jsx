import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { useTranslation } from 'react-i18next';

const projectsData = [
{
  src: 'https://youtu.be/53Q8bnRqmeI',
  hashtags: ['promotional video', 'transitions', 'text animation', ' background music'],
},
{
  src: 'https://youtu.be/FNuRJMy4mn0',
  hashtags: ['introductory video', 'transitions', 'text animation', 'sound effects', 'background music'],
},
{
  src: 'https://youtu.be/mvBJG_KaWM8',
  hashtags: ['transitions', 'text animation', ' background music'],
},
{
  src: 'https://youtu.be/xtBu5TRY9C0',
  hashtags: ['funny moments', 'roblox doors', 'video transitions', 'subtitles', 'memes'],
},
{
  src: 'https://youtu.be/ZQjsW7u_CVQ',
  hashtags: ['funny moments', 'roblox evade', 'video transitions', 'subtitles', 'memes'],
},
{
  src: 'https://youtu.be/PXgnE0l4oPk',
  hashtags: ['funny moments', 'roblox murder mystery', 'video transitions', 'subtitles', 'memes'],
}
]

const Project = ({data}) => {
  return (
      <li className="video-container">
        <div className="video-responsive">
        <ReactPlayer 
        className="video-player" 
        url={data.src} 
        controls={true}
        />
        </div>
        <div className="video-hashtags">
        {data.hashtags.map(hashtag => (
        <div className="video-hashtag">{hashtag}</div>
      ))}
        </div>
      </li>
    );
};


const Projects = () => {

  const { t } = useTranslation();
  return (
      <div className="projects" id='projects'>
      <h1>{t('portfolio.name')}</h1>
      <ul className="videos">
      {projectsData.map(project => (
        <Project data={project} />
      ))}
      </ul>
      </div>
  );
};

export default Projects;