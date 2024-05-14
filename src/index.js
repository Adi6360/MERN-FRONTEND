import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {store} from './app/store';
import {provider} from 'react-redux';
import { disableReactDevTools} from '@fvilers/disable-react-devtools'; 

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
     <BrowserRouter>
       <Routes>
        <Route path= "/*" elemment ={<App/>}/>
       </Routes>
      </BrowserRouter>
     </Provider>
    </React.StrictMode>
);
