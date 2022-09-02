import './App.css';
import Contador from './components/Contador';
import ListaGasto from './components/listadoGastos/ListaGasto';
import GastoContextProvider from './providers/GastoContextProvider';

function App() {

  return (

    <GastoContextProvider>
      <Contador/>
      <ListaGasto/>
    </GastoContextProvider>
  );
}

export default App;
