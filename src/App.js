import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home'
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { NotFound } from './components/NotFound';
import { Navigation } from './components/Navigation';
import { Products } from './components/Products';

function App() {
  return (
    <div className="App">
      <h1>Hello react router</h1>

      <Navigation></Navigation>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing></Pricing>} />
        <Route path='/contacts' element={<Contacts></Contacts>} />
        <Route path='/products/:productId' element={<Products></Products>} />
        <Route path='*' element={<NotFound />} />
        {/* //need replace here */}
        <Route path='millenium-falcon' element={<Navigate to='/products/10' replace/>}></Route>

      </Routes>
    </div>
  );
}

export default App;


