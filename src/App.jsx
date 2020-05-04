import React from 'react';
import { render } from 'react-dom';
import Workout from './Workout';

function App() {
  return React.createElement('div', { className: 'container' }, [
    React.createElement('h1', {}, 'Workout Manager'),
    React.createElement(Workout, {
      name: 'Chest Press',
      group: 'Chest',
      target: 'Upper Body'
    }),
    React.createElement(Workout, {
      name: 'Leg Press',
      group: 'Leg',
      target: 'Lower Body'
    }),
    React.createElement(Workout, {
      name: 'Bicep Curls',
      group: 'Arms',
      target: 'Upper Body'
    })
  ]);
}

render(React.createElement(App), document.getElementById('root'));
