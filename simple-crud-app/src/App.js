import React from 'react';
import './App.css';
import Shop from './components/shop';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <h3>Simple Shop App</h3>
    <hr></hr>
    <div className="container"><Shop/></div>
    </div>
  );
}

export default App;
