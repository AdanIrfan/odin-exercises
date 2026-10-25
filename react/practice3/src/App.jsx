import Avatar from "./Avatar";

export default function App() {
  return (
    <div>
      <Avatar name="Ali" image="/ali.png" size={120} />

      <Avatar name="Ahmed" image="/ahmed.png" size={80} />

      <Avatar name="Sara" image="/sara.png" />
    </div>
  );
}
