import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/common.css';
import './App.css';
import { Banner, ToCome, Footer, NavBar, Projects, Brands, Events } from '../components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Brands />
      <Events />
      <Projects />
      <ToCome />
      <Footer />
    </div>
  );
}

export default App;
