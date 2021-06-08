// import de styles globaux
// Attention les styles importés de la sorte s'appliqueront sur toute
// l'arborescence de composants de mon app
import "./App.css";

// Ceci est un import par défaut d'un composant qu'on a créé nous même
import Header from "./Header/Header";

function App() {
  const user = {
    firstName: "Samy",
  };
  const content_fr = {
    greetingsMessage: "Bonjour ",
  };
  //const dynamicContent = <span>Partie</span>

  const conatainerClassName = "App";
  return (
    <div className={conatainerClassName}>
      <Header pseudo={user.firstName} message={content_fr.greetingsMessage}>
        <span>Partie Droite</span>
        <p>Petit paragraphe</p>
      </Header>
    </div>
  );
}

export default App;
