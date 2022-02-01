import { useState, useRef } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [firstName, setFirstName] = useState("Cigaar");
  const [lastName, setLastName] = useState("Shiidaad");

  const joke = useRandomJoke(firstName, lastName);
  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <div
        style={{
          width: "400px",
          backgroundColor: "lightcoral",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "5px auto",
        }}
      >
        <h2 style={{}}>{joke}</h2>
      </div>

      <form>
        <input ref={firstNameRef} placeholder="first name..." />
        <input ref={lastNameRef} placeholder="last name..." />
      </form>
      <button type="button" onClick={generateJoke}>
        Generate Joke
      </button>
    </div>
  );
}

export default App;
