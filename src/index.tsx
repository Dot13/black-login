import * as React from "react";
import { render } from "react-dom";
import Nav from "./Nav";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <h4>Please login</h4>
      <label htmlFor="nameInput" className="txtLabel">
        Username:{" "}
      </label>
      <input id="nameInput" name="nameInput" type="text" className="txtInput" />
      <br />
      <label htmlFor="password" className="txtLabel">
        Password:{" "}
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className="txtInput"
      />

      <br />
      <br />
      <button className="btn btn-login">Login</button>
      <a className="fpassWordLink" href="">
        Forgot Password?
      </a>
      <hr />
    </div>
  );
  function Press() {}
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
