import image from './todo-app.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{color: "white"}}>Repaso Módulo 2</h1>
      <h2 style={{backgroundColor: "lightyellow"}}>Cohorte FT38b</h2>
      <h2>ToDo App</h2>
      <h3>Idea general del proyecto:</h3>
      <hr/>
      <img src={image} alt="proyecto" style={{width: "700px"}}/>
    </div>
  );
}

export default App;
