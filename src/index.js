import React from 'react';
import { createRoot } from 'react-dom/client';
import { loginUser } from './api/fetch';

const App = ()=> {
 loginUser("Kristy", "12345678");
  return (
    <div>
      <h1>Front End</h1>
    </div>
  );
};

const root = createRoot(document.querySelector('#root'));

root.render(<App />);
