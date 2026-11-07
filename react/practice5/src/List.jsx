function List(props) {
  return (
    <>
      {!props.animals ? (
        <div>Loading...</div>
      ) : props.animal.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      ) : (
        <div> There are no animals in the list!</div>
      )}
    </>
  );
}

// function List(props) {
//   return (
//     <>
//       {!props.animal && <div>Loading...</div>}
//       {props.animal && props.animal.length === 0 && (
//         <div>There are no animals in the list!</div>
//       )}
//       {props.animal && props.animal.length > 0 && (
//         <ul>
//           {props.animal.map((animal) => {
//             return <li key={animal}>{animal}</li>;
//           })}
//         </ul>
//       )}
//     </>
//   );
// }

export default function App() {
  const animals = [];
  return (
    <div>
      <h1>Animals:</h1>
      <List animals={animals} />
    </div>
  );
}
