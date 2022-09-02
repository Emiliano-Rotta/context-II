import { useState } from "react";

export default function Gasto() {

  const [gastos, setGastos] = useState([]);

  const updateGastos = (gastoMes) => {
    setGastos([...gastos, gastoMes]);
  }

  return [gastos, updateGastos];

}