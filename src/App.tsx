import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVIsibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVIsibility(false)}>MyAlert1</Alert>
      )}
      <Button onClick={() => setAlertVIsibility(true)}>MyButton2</Button>
    </>
  );
}

export default App;
