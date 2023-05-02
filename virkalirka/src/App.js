import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <div className='pages'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
