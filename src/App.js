import './App.css';
import Hero from './Components/Hero.jsx'
import Programs from './Components/Programs.jsx';
import Reasons from './Components/Reasons.jsx';
import Plans from './Components/Plans.jsx';
import Testimonials from './Components/Testimonials.jsx';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials />
          
    </div>
  );
}

export default App;
