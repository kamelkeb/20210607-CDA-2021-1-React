// import de styles globaux
// Attention les styles importés de la sorte s'appliqueront sur toute
// l'arborescence de composants de mon app
import "./App.css";

// Ceci est un import par défaut d'un composant qu'on a créé nous même
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
