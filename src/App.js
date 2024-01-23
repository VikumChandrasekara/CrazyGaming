import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import {Streams} from './components/Streams';
import {About} from './components/About';
import {Contact} from './components/Contact';
import  Newsletter  from './components/Newsletter';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Streams />
      <About />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
