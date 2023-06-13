
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Service from './Service'

import "./App.css";
import Product from './Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Product/>
          <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/contact' element={< Contact />}/>
          <Route path='/service' element={<Service />}/>
          </Routes>
        
    
      </BrowserRouter>
    </div>
  );
}
export default App;

