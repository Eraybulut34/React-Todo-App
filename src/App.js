import './App.css';
import React, { useState, Component } from 'react';
import Todos from './components/Todos/Todos';
import Calculator from './components/PropUsing/Calculator';

function App() {
  return (
    <div className="App">
     <Todos/>
<Calculator/>
    </div>
  );
}

export default App;
