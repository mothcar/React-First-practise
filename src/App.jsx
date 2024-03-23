import { useEffect } from "react";
import "./App.css";
import { Car, Domain } from "./utils/Classes";
import { Button } from "react-bootstrap";
import Effect from "./Effect.jsx";
import Form from "./Form.jsx";

const myOldCar = new Car("gray", "Audi A6");
const oneDomain = new Domain("항공권", "우선구매");
console.log("Domain : ", oneDomain.name);

function goClick() {
  const name = localStorage.getItem("data")
  alert(`Clicked.... ${name}`);
}



function App() {
  useEffect(()=>localStorage.setItem("data", "David"))
  return (
    <div>
      <Form />
      <div>Practice Class : {myOldCar.name}</div>
      <Button className="mt-2" variant="primary" onClick={goClick}>
        Primary
      </Button>
      <Effect />
    </div>
  );
}

export default App;
