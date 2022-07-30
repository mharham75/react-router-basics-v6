import { Routes, Route} from 'react-router-dom';

//components
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/Order-Summary';
import NoMatch from './components/NoMatch'

//styles
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>  
    </div>
  );
}

export default App;
