import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from "./TodoPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Your todo list.</p>
        <TodoApp/>
      </header>
    </div>
  );
}

export default App;
