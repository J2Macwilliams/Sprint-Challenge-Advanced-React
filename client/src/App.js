import React from 'react';
// import { Route } from 'react-router-dom';

// import Home from './components/Home';
// import Players from './components/Players';
import Club from './components/Club';


// import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Route exact path='/' component={<Home />} />
      <Route path='/players' component={<Players/>}/> */}
      <Club />
    </div>
  );
}

export default App;
