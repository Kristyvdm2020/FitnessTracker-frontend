import React from 'react';
import { Routes, Route, HashRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { loginUser } from './api/fetch';
import { ViewRegister } from '../components/header/header';
import { Navbar } from './nav';

const App = ()=> {
 loginUser("Kristy", "12345678");
  


};




const root = createRoot(document.querySelector('#root'));

root.render(<HashRouter><App /></HashRouter>);
