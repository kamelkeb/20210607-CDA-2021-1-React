import "./App.css";
import ColorBox2 from "./ColorBox2/ColorBox2";
import Layout from "./Layout/Layout";
import Compteur from "./Compteur/Compteur";
import {
  containerClass,
  headerContent,
  menuContent,
  colorsChannel,
} from "./mockData";

function App() {
  // Compteur

  return (
    <div className={containerClass}>
      <Layout menuContent={menuContent} headerContent={headerContent}>
        <Compteur></Compteur>
        <ColorBox2 colorsChannel={colorsChannel} />
      </Layout>
    </div>
  );
}

export default App;
