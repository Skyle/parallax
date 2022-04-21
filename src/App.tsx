// import './App.css'

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer>
          <h1>Hallo</h1>
        </ParallaxLayer>
        <ParallaxLayer>
          <h2>und Willkommen</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
