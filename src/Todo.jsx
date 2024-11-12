// export default function Todo({task,isDone}) {

//   return <li>Task:{task}</li>;
// }

// conditional rendering option 1
// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished:{task}</li>;
//   } else {
//     return <li>Work on:{task}</li>;
//   }
// }

// conditonal rendaring option 2
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished:{task}</li>;
//   }
//   return <li>Work on:{task}</li>;
// }

// condtional rendaring option ternary operator 3
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isdone ? "Finished" : "Work on"} : {task}
//     </li>
//   );
// }

// condition  rendaring option 4
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && ":Done"}
//     </li>
//   );
// }

// conditional rendaring option 5
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || ":Do IT"}
//     </li>
//   );
// }
// conditional rendering option 6
export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>Finish:{task}</li>;
  } else {
    listItem = <li>Work on:{task}</li>;
  }
  return listItem;
}
