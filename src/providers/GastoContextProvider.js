import GastoContext from '../context/GastoContext';
import Gasto from '../hooks/Gasto';

function GastoContextProvider({children}) {

  const [gastos, setGastos] = Gasto();

  const gastoMes = {
    gastos: [gastos, setGastos]
  }

  return (
    <GastoContext.Provider value={gastoMes}>
      {children}
    </GastoContext.Provider>

  );
}

export default GastoContextProvider;
