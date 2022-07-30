import { Routes, Route} from 'react-router-dom';

//components
import Home from './components/Home';
import About from './components/About';

//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}/>
      </Routes>  
    </div>
  );
}

export default App;
