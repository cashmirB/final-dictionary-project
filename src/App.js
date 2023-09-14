import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>My Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Cashmir Balajadia and is{" "}
          <a
            href="https://github.com/cashmirB/final-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
