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

      {/* Render props 
          A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

          @props - could have been passed in a 'data' object {}
      */}

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
