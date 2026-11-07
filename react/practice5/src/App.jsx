function ListItem({ animal }) {
  return <li>{animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

export default function App() {
  const animals = ["Dogs", "Cats", "Lizard", "Lion"];
  return <List animals={animals} />;
}
