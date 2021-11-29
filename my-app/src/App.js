// src/App.js
import "./App.css";
import logo from "./images/logo.png";
import menu from "./images/image0.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

function App(props) {
  return (
    <div className="App">
      <main>
        <nav>
          <img src={logo} alt="logo" />
          <img src={menu} alt="menu" />
        </nav>
        <h1>Say hello to <br/>
        ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </main>

      <section className="card-panel">
        <div className="card">
          <img src={image1} alt="" />
          <h4 className="card-title">Declarative</h4>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="card">
          <img src={image2} alt="" />
          <h4 className="card-title">Components</h4>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="card">
          <img src={image3} alt="" />
          <h4 className="card-title">Single-Way</h4>
          <p>A set of inmutable values are passed to the component's.</p>
        </div>

        <div className="card">
          <img src={image4} alt="" /> <h4 className="card-title">JSX</h4>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}
export default App;
