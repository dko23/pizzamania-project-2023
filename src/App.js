
import aboutpizza from './images/aboutpizza.jpg'
import { Aboutpizza } from './Aboutpizza';
import { Navbar } from './Navbar';
import './App.css';
import { Hero } from './Hero';
import { Pizzatypes } from './Pizzatypes';
import { Final} from './Final'

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Aboutpizza about={aboutpizza} />
      <Pizzatypes />
      <Final/>
    </>
  );
}

export default App;
