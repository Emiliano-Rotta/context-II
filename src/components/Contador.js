import React from "react";
import useGasto from "../hooks/useGasto";


export default function Contador() {

  const { gastos } = useGasto();
  const [todoGastos] = gastos;

  let suma = 0;
  for(let i = 0 ; i<todoGastos.length; i++)
  suma += Number(todoGastos[i])

  return (
  <div> Gasto mensual: {suma}</div>
  )
}
