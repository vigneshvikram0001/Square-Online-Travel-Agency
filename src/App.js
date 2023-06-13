import Header from './Components/Header';
import "./App.css"
import Home from './Components/Home';
import Services from './Components/Services';
import Pacakage from './Components/Pacakage';
import Gallery from './Components/Gallery';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Services/>
      <Pacakage/>
      <Gallery/>
      <Review/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
