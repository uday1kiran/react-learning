import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <ListGroup
      items={items}
      heading="Cities"
      onSelectedItem={handleSelectItem}
    />
  );
}

export default App;
