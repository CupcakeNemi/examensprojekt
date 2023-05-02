import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TutorialContextProvider } from './context/TutorialContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <TutorialContextProvider>
    <App/>
    </TutorialContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


