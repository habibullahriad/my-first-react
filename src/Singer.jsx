export default function Singer({ singer }) {
  return (
    <div>
      <h3>Singer:{singer.name}</h3>
      <p>age:{singer.age}</p>
      <p>id:{singer.id}</p>
    </div>
  );
}
