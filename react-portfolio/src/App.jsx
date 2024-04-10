import styles from './App.module.css';
import { About } from './components/about/about.jsx';
import { Navbar } from './components/navbar/navbar.jsx';
import { Intro } from './components/intro/intro.jsx';
import { Skill } from './components/skill/skill.jsx';
import { Projects } from './components/projects/projects.jsx';
import { Contact } from './components/contact/contact.jsx';

function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Intro/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
  </div>
  
}

export default App
