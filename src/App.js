import "./App.css";
import Login from "./Login";
import Nav from "./Nav";

function App() {
  return (
    <>
      <div class="banner"></div>
      <Nav />
      <div className="App">
        <Login />
      </div>
    </>
  );
}

export default App;
