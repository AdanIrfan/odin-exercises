// function Button(props) {
//   const buttonStyle = {
//     color: props.color,
//     fontSize: props.fontSize + "px",
//   };

//   return <button style={buttonStyle}>{props.text}</button>;
// }

// export default function App() {
//   return (
//     <div>
//       <Button text="Click Me!" color="green" fontSize={12} />
//       <Button text="Don't Click Me!" color="red" fontSize={12} />
//       <Button text="Hurry up!" color="yellow" fontSize={12} />
//     </div>
//   );
// }

// Add props destruction

// function Button({ text, color, fontSize }) {
//   const buttonStyle = {
//     color: color,
//     fontSize: fontSize + "px",
//   };

//   return <button style={buttonStyle}>{text}</button>;
// }

// export default function App() {
//   return (
//     <div>
//       <Button text="Click Me!" color="green" fontSize={12} />
//       <Button text="Don't Click Me!" color="red" fontSize={12} />
//       <Button text="Hurry up!" color="yellow" fontSize={12} />
//     </div>
//   );
// }

// default props

function Button({ text = "Click Me!", color = "green", fontSize = 12 }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default function App() {
  return (
    <div>
      <Button />
      <Button color="red" fontSize={14} />
      <Button text="Hurry up!" color="yellow" fontSize={14} />
    </div>
  );
}
