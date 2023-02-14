import React from 'react';
import { createRoot } from 'react-dom/client';

const App = ()=> {
  return (
    <div>
      <h1>Front End</h1>
      <nav>
        <Link>
    <Link></Link>
    <Link></Link>
    <Link></Link>
    <Link></Link>
        </Link>
      </nav>
        <Routes>
      <Route path='/register' element = {}></Route>
      <Route path='/register' element = {}></Route>
      <Route path='/register' element = {}></Route>
      <Route path='/register' element = {}></Route>
        </Routes>
    </div>
  );
};




const root = createRoot(document.querySelector('#root'));

root.render(<App />);
