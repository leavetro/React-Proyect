import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"Bienvenidos al almacen organico"} />
      <Button variant="success" className="mx-3">Añadir</Button>
      <Button variant="danger" className="mx-3">Quitar</Button>

    </div>
  );
}

export default App;
