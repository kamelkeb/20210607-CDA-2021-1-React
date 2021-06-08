import "./App.css"; // import de styles globaux
import Header from "./Header/Header";

function App() {
  const conatainerClassName = "App";
  return (
    <div className={conatainerClassName}>
      <Header></Header>
    </div>
  );
}

export default App;
