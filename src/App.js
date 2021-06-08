import "./App.css"; // import de styles globaux
import Header from "./Header/Header";

function App() {
  const conatainerClassName = "App";
  return (
    <div className={conatainerClassName}>
      <h2>Un truc Nouveau à Récup avec git pull</h2>
      <Header></Header>
    </div>
  );
}

export default App;
