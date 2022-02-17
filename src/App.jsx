import './App.css';
import { Plantilla } from './components/Plantilla.js'


function App() {
  return (
    <div className="textomadre">
    <div className="col-12"> ALGO MAS</div>
    <div className="row">
    <div className="col-sm-3 order-sm-1 mb-3">
      Proximamente Filtros
    </div>
    <div className="col-sm-2 order-sm-3 mb-3">
      Proximamente Carrito
    </div>
    <div className="col-sm-7 order-sm-2 px-5"> 
            <Plantilla/>
            <Plantilla/>
            <Plantilla/>
            <Plantilla/>
            <Plantilla/>
            <Plantilla/>
    </div>
    </div>
    </div>
  );
}

export default App;
