function Listeleme({ item }) {
  return (
    <li>
      {item.name}: {item.price}₺
    </li>
  );
}

export default Listeleme;
