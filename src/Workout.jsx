import React from 'react';

/**
 * Functional component that describes a workout.
 * @function
 * @name Workout
 *
 * @param       {string} name   [name of the workout]
 * @param       {string} group  [exercise group the workout belongs to]
 * @param       {string} target [target body area]
 * @constructor
 */
function Workout({ name, group, target }) {
  return React.createElement('div', {}, [
    React.createElement('h4', {}, name),
    React.createElement('h6', {}, group),
    React.createElement('h6', {}, target)
  ]);
}

export default Workout;
