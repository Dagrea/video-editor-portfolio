import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="background">
      <div className="background_avatar"></div>
      </div>
      <div className="container">
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
