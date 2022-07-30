import { Routes, Route} from 'react-router-dom';

//components
import Home from './components/Home';
import About from './components/About';

//styles
import './App.css';
import Navbar from './components/Navbar';
import OrderSummary from './components/Order-Summary';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
      </Routes>  
    </div>
  );
}

export default App;
