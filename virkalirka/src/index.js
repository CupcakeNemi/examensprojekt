import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TutorialContextProvider } from './context/TutorialContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TutorialContextProvider>
    <App/>
    </TutorialContextProvider>
  </React.StrictMode>
);


