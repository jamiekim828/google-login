import React from 'react';
import ReactDOM from 'react-dom/client';
import dotenv from 'dotenv';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// dotenv.config()
// const client_Id = process.env.CLIENT_ID as string

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="114586889136-bjp50b84ikh5iepu5958gacd2enphgmg.apps.googleusercontent.com">
      <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
