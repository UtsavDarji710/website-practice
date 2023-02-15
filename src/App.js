
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import AboutUs from './Components/About/AboutUs';
import Service from './Components/Services/Service';
import Team from './Components/Team/Team';
import Projects from './Components/projects/Projects';
import Client from './Components/Clients/Client';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Service/>
      <Team/>
      <Projects/>
      <Client/>
      <Footer/>
    </div>
  );
}

export default App;
