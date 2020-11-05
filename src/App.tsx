import React from 'react';
import './App.css';
import { TextField } from './TextField';
import { ReducerExample } from './ReducerExample';
import { Counter } from './Counter';

const App: React.FC = () => {
  return (
    <div className="App">
      Hello
      <TextField
        text='This is my text'
        person={{ firstName: 'Andrei', lastName: 'Airinei' }}
        handleChange={e => { e.preventDefault() }}
      />
      <ReducerExample />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}


export default App;
