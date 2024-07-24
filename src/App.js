import logo from './assets/img/LogoWWEDatabase.png';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { SkillsEvents } from './components/SkillsEvents';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
      <SkillsEvents/>
      <Projects/>
    </div>
  );
}

export default App;
