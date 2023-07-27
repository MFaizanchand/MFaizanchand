
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/css/styles.css";
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Help from './components/Help';
import Pricing from './components/Pricing';
import Login from './components/Login';
function App() {
 return(
  <div>
  <BrowserRouter>
  <Navbar title = "NCBA&E"/>
  <Routes>
  <Route path='/' element={<Title />}></Route>
  <Route path='/pricing' element={<Pricing />}></Route>
  <Route path='/Help' element={<Help />}></Route>
  <Route path='/Login' element={<Login />}></Route>


  </Routes></BrowserRouter>
  </div>
 )
  
}

export default App;
