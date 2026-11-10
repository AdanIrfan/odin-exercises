function Item({ name, isPacked }) {
  // if (isPacked) {
  // return <li classNmae="item">{name} ✅</li>;
  // return null;
  // }
  return <li className="item">{isPacked ? name + " ✅" : name}</li>;
}

export default function ParkingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
