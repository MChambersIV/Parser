import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <p className="App-header-left">
          Left
        </p>
        <p className="App-header-right">
          Right
        </p>
        
      </header>
      <div className="App-box">
        <form>
          <label>
            <input type="text"></input>
          </label>
          
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
