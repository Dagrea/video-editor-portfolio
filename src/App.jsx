import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <div className="background">
      <div className="background_avatar"></div>
      </div>
      <div className="container">
      <div className="home">
      <h1>Vladyslav Taimasov from Ternopil</h1>
      <h3> Hi! I'm Vladislav, a Videographer/Editor and Motion Graphic Designer. </h3>
      <p>With over 3 years of strong experience in capturing, editing and producing professional material such as camera footage, dialogue, sound files, and graphics, with an in-depth understanding of motion graphics, digital software and video editing equipment.</p>
      <div className="rounded_avatar"></div>
      </div>
      <div className="about">
      <div className="about_text">
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor dolor a mauris posuere auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis elit tellus, commodo et nibh id, vulputate tristique mi. Vivamus rhoncus iaculis neque ut hendrerit. Nam ut ipsum tellus. Nullam faucibus accumsan lacus a blandit. Vivamus vestibulum in nunc pellentesque euismod. Sed sit amet velit vitae tortor porta pretium. Sed gravida placerat convallis. Vestibulum fermentum lobortis pulvinar.
      Cras feugiat sit amet nunc et interdum. Donec luctus, quam bibendum scelerisque accumsan, augue arcu feugiat augue, vitae venenatis elit lacus et massa. Ut hendrerit nunc eget lacus ultricies bibendum. Phasellus neque nisl, luctus eget pulvinar sit amet, dictum sed felis. Suspendisse vitae ante vitae nibh feugiat tincidunt. Maecenas volutpat sagittis mi, et tristique odio ornare nec. Donec sollicitudin, quam quis molestie luctus, nisi tortor auctor nibh, sed egestas ligula turpis nec arcu.
      </p>
      </div>
      </div>
      <div className="projects">
      <ul className="videos">
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/5LACYrvV6uU`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project 1"
        />
        </div>
        <div className="video-hashtags">
        <div className="video-hashtag">fonkmetal</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        </div>
      </li>
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/FCCCb7ZWXz4`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project 2"
        />
        </div>
        <div className="video-hashtags">
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        </div>
      </li>
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/kUJw2eVYznw`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project 3"
        />
        </div>
        <div className="video-hashtags">
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        </div>
      </li>
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/w_MSFkZHNi4`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project 4"
        />
        </div>
        <div className="video-hashtags">
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        </div>
      </li>
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/srVRmB3c7co`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project 5"
        />
        </div>
        <div className="video-hashtags">
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        </div>
      </li>
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/bnmAi53H520`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project 6"
        />
        </div>
        <div className="video-hashtags">
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        </div>
      </li>
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/DW5Wzx_VmvM`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project 4"
        />
        </div>
        <div className="video-hashtags">
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">video</div>
        </div>
      </li>
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/2pYyc61mS34`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project 5"
        />
        </div>
        <div className="video-hashtags">
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">video</div>
        <div className="video-hashtag">history</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">instrumental</div>
        </div>
      </li>
      <li className="video-container">
        <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project 6"
        />
        </div>
        <div className="video-hashtags">
        <div className="video-hashtag">fonk</div>
        <div className="video-hashtag">music</div>
        <div className="video-hashtag">instrumental</div>
        <div className="video-hashtag">video</div>
        </div>
      </li>
      </ul>
      </div>
      <div className="contact">
      <h1>Contact</h1>
      <div><p>Ready for offers.</p></div>
      <div className="email"><a href="mailto:vladternopil@gmail.com"><p>E-mail: vladternopil@gmail.com</p></a></div>
      <div> <p>Phone: +380-99-666-77-14</p></div>
      </div>
      <footer className="footer">
      <div>Copyright © 2023. All rights are reserved</div>
      <div className="navbar_icons">
        <div className="navbar_icons_instagram"/>
        <div className="navbar_icons_weblancer"/>
        <div className="navbar_icons_telegram"/>
      </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
