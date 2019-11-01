import React from 'react';
import { Route } from 'react-router-dom';

import Club from './components/Club';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='' render={(props) => <Club {...props}/>}/>
    </div>
  );
}

export default App;
