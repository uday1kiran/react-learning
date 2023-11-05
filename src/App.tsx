import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <Button onClick={() => console.log("Clicked")} color="secondary">
        MyButton1
      </Button>
      <Button onClick={() => console.log("Clicked")}>MyButton2</Button>
    </>
  );
}

export default App;
