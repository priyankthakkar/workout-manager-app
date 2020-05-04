const Workout = ({ name, group, target }) => {
  return React.createElement("div", {}, [
    React.createElement("h4", {}, name),
    React.createElement("h6", {}, group),
    React.createElement("h6", {}, target),
  ]);
};

const App = () => {
  return React.createElement("div", { className: "container" }, [
    React.createElement("h1", {}, "Workout Manager"),
    React.createElement(Workout, {
      name: "Chest Press",
      group: "Chest",
      target: "Upper Body",
    }),
    React.createElement(Workout, {
      name: "Leg Press",
      group: "Leg",
      target: "Lower Body",
    }),
    React.createElement(Workout, {
      name: "Bicep Curls",
      group: "Arms",
      target: "Upper Body",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
