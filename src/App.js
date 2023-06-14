
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Service from './Service'
// import Login from './Login';
import "./App.css";
import NavBar from './NavBar';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
          <Route path='/'  element={<Home />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/service' element={<Service />}/>
          <Route path='/login' element={<LoginForm />}/>
          </Routes>
        
    
      </BrowserRouter>
    </div>
  );
}
export default App;

