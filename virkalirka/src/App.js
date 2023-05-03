@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Julius+Sans+One&display=swap');
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
