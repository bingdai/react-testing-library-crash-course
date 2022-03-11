import "./App.css";
import React from "react";

function App() {
  return (
    <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default App;
