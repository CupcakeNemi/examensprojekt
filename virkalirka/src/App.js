import React, {useState} from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Nav from './components/Nav';



function App() {

//   const [pic, setPic] = useState(null);

//   const handlePic = (e) => {
//     setPic(e.target.pics[0]);
//   }
//   const handleUpload = async () => {
//     if (!pic) {
//       alert('Select a file');
//       return;
//     }
  
 

//   try {
//     const response = await fetch('http://localhost:3000/upload', {
//       method: 'POST',
//       body: formData,
//     })
  

//   if(response.ok){
//     alert('Image uploaded');
//   }else {
//     alert('Failed to upload image')
//   }
// }catch (error){
//   console.error(error);
//   alert('Failed to upload the image')
// }
// }

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
