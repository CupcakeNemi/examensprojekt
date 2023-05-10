import React, {useState} from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
// import createTutorial from './pages/createTutorial';

// import UserPage from './pages/userPage';
import Nav from './components/nav';




function App() {

  // const createTutorialRouter = require('./routes/createTutorial');
  // app.use('/api/tutorials/createTutorial', createTutorialRouter);
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <div className='pages'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        {/* <Route path='/userPage' element={<UserPage/>}/> */}

        {/* <Route path='/createTutorial' element={<createTutorial/>}/> */}
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
