import React from 'react';

const projectsData = [
{
  src: 'https://www.youtube.com/embed/5LACYrvV6uU',
  title: 'Project 1',
  hashtags: ['fonk', 'music', 'instrumental', 'video', 'instrumental'],
},
{
  src: 'https://www.youtube.com/embed/FCCCb7ZWXz4',
  title: 'Project 2',
  hashtags: ['fonk', 'music', 'instrumental', 'video', 'instrumental'],
},
{
  src: 'https://www.youtube.com/embed/kUJw2eVYznw',
  title: 'Project 3',
  hashtags: ['fonk', 'music', 'instrumental', 'video', 'instrumental'],
},
{
  src: 'https://www.youtube.com/embed/w_MSFkZHNi4',
  title: 'Project 4',
  hashtags: ['fonk', 'music', 'instrumental', 'video', 'instrumental'],
},
{
  src: 'https://www.youtube.com/embed/srVRmB3c7co',
  title: 'Project 5',
  hashtags: ['fonk', 'music', 'instrumental', 'video', 'instrumental'],
},
{
  src: 'https://www.youtube.com/embed/bnmAi53H520',
  title: 'Project 6',
  hashtags: ['fonk', 'music', 'instrumental', 'video', 'instrumental'],
},
{
  src: 'https://www.youtube.com/embed/DW5Wzx_VmvM',
  title: 'Project 7',
  hashtags: ['fonk', 'music', 'instrumental', 'video', 'instrumental'],
},
{
  src: 'https://www.youtube.com/embed/2pYyc61mS34',
  title: 'Project 8',
  hashtags: ['fonk', 'music', 'instrumental', 'video', 'instrumental'],
},
{
  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  title: 'Project 9',
  hashtags: ['fonk', 'music', 'instrumental', 'video', 'instrumental'],
}
]

const Project = ({data}) => {
  return (
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={data.src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={data.title}
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

  return (
      <div className="projects">
      <ul className="videos">
      {projectsData.map(project => (
        <Project data={project} />
      ))}
      </ul>
      </div>
  );
};

export default Projects;