import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import Club from './components/Club';




function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} /> 

      <Route path='/club' render={(props) => 
      <Club {...props}/>} />  
    
    </div>
  );
}

export default App;
