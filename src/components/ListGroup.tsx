function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];
  //const message = items.length === 0 ? <p>No item found</p> : null;
  const message = items.length === 0 && <p>No item found in list</p>;

  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
