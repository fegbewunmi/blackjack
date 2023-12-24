import logo from "./logo.svg";
import "./App.css";
import CardDeck from "./components/cardDeck";
import BlackJack from "./components/blackJack";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BlackJack />
      </header>
    </div>
  );
}

export default App;
