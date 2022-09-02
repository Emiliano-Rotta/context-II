
import useUser from "../../hooks/useGasto";
import Form from "./Form";
import React from "react";

export default function ListaGasto() {
  const context = useUser();
  const { gastos } = context;
  const [todoGastos, setTodoGastos] = gastos;
  return (
    <div>
      <h1>Gastos</h1>
      {
        todoGastos.map((gasto, index) =>  <p key={index}>{gasto}</p>)
      }
      <Form/>
    </div>
  )
}
