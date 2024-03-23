import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function clickHandler(e) {
    e.preventDefault()
    console.log("Result : ", name)
  }
  return (
    <div>
      <div>
        {" "}
        {name.firstName}
        {name.firstName !== "" ? " - " : ""}
        {name.lastName}
      </div>
      <form action="">
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
          className="mr-2"
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
        <button onClick={e=>clickHandler(e)}>Submit</button>
      </form>
    </div>
  );
}
