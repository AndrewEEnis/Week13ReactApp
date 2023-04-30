import React from "react";
import "./App.css";

function Login() {
  return (
    <section className="login">
      <div>
        <h3>LOG IN</h3>
      </div>
      <div>
        <form className="card">
          <label htmlFor="username">USERNAME:</label>
          <input
            className="form-control"
            id="username"
            type="text"
            placeholder="username here"
          ></input>
          <label htmlFor="password">PASSWORD:</label>
          <input
            className="form-control"
            id="password"
            type="password"
            placeholder="password here"
          ></input>
          <button className="btn btn-dark m-2">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
