import "./App.css"; // import de styles globaux
import Header from "./Header/Header";

function App() {
  const texte = "Premières petites manips";
  const conatainerClassName = "App";
  return (
    <div className={conatainerClassName}>
      <Header></Header>
      <h2>Hello CDA 2021-1</h2>
      <p>{texte.toUpperCase()}</p>
    </div>
  );
}

export default App;
