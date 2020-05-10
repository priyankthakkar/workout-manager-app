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
  return (
    <div>
      <h4>{name}</h4>
      <h6>{group}</h6>
      <h6>{target}</h6>
    </div>
  );
}
export default Workout;
