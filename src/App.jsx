import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import "./App.css";

function App() {
  const actors = ["sakib", "Shariful raj", "jasim", "rubel", "salman sha"];
  const singers = [
    { id: 1, name: "dr.mahfux", age: 68 },
    { id: 2, name: "akash shen", age: 69 },
    { id: 3, name: "james", age: 66 },
    { id: 4, name: "bappa", age: 55 },
  ];
  return (
    <>
      <h1>Vite+React</h1>
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core concepts" isDone={false}></Todo>
      <Todo task="Try jsx" isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>

      <Student grade="7" score="99"></Student>
      <Student grade="8" score="97"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  return (
    <h3>
      This device:{props.name} price:{props.price}
    </h3>
  );
}
function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "sakib", age: 12 };
  return (
    <h3>
      I am {person.name}with:{age + money}
    </h3>
  );
}
const { grade, score } = { grade: "7", score: "99" };
function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}
function Developer() {
  const developerStyle = {
    margin: "20px",
    border: "2px solid purple",
    padding: "20px",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  );
}
export default App;
