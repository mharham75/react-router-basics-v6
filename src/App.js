import React from 'react';
import { Routes, Route} from 'react-router-dom';

//components
import Home from './components/Home';
//import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/Order-Summary';
import NoMatch from './components/NoMatch'
import Products from './components/Products'
import Featured from './components/Featured'
import New from './components/New'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Profile from './components/Profile'

//styles
import './App.css';
import { AuthProvider } from './components/auth';
import Login from './components/Login';

//Lazy Loading About
const LazyAbout = React.lazy( () => import('./components/About'))


function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallback='Loading...'>
            <LazyAbout />
          </React.Suspense>} 
        />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userid' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='profile' element={<Profile />}/>
        <Route path='login' element={<Login />}/>
        <Route path='*' element={<NoMatch />} />
      </Routes>  
    </div>
    </AuthProvider>
  );
}

export default App;
