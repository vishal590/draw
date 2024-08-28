import Canvas from './Canvas/Canvas'; 
import './App.css';

function App() {
  const canvasCss = {
    width: "1000px",
    height: "800px",
  }

  return (
    <div className="App">
      <Canvas width={canvasCss.width} height="1500" />
    </div>
  );
}

export default App;
