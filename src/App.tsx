import React from 'react';
import './App.css';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      Hello
      <TextField
        text='This is my text'
        person={{ firstName: 'Andrei', lastName: 'Airinei' }}
        handleChange={e => { e.preventDefault() }}
      />
    </div>
  );
}


export default App;
