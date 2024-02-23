import './App.css';
import Hero from './Components/Hero.jsx'
import Programs from './Components/Programs.jsx';
import Reasons from './Components/Reasons.jsx';
import Plans from './Components/Plans.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Join from './Components/Join.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials />
      <Join/>
      <Footer/>
          
    </div>
  );
}

export default App;
