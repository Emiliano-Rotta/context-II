import { createContext } from "react";

const GastoContext = createContext({
  gastos: [[], () => {}], // const [todos, setTodos] = useState([]);
});

export default GastoContext;