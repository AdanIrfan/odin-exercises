function Avatar({ name, image, size = 100 }) {
  return (
    <div>
      <img src={image} alt={name} width={size} height={size} />

      <h2>{name}</h2>
    </div>
  );
}

export default Avatar;
