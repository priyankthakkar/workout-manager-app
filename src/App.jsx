import React from 'react';
import { render } from 'react-dom';
import Workout from './Workout';

const workouts = [
  {
    name: 'Chest Press',
    group: 'Chest',
    target: 'Upper Body',
  },
  {
    name: 'Leg Press',
    group: 'Legs',
    target: 'Lows Body',
  },
  {
    name: 'Bicep Curls',
    group: 'Arms',
    target: 'Upper Body',
  },
];

function App() {
  return (
    <div className='container'>
      <h1>Workout Manager</h1>
      {workouts.map((workout, index) => (
        <Workout key={index} {...workout} />
      ))}
    </div>
  );
}

render(<App />, document.getElementById('root'));
