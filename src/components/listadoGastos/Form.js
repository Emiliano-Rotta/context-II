import { useState } from "react";
import useUser from "../../hooks/useGasto";


export default function Form() {
  const context = useUser();
  const { gastos } = context;
  const [todoList, setTodoList] = gastos;
  const [newItem, setNewItem] = useState(undefined);

  function addList(e) {
    e.preventDefault();
    setTodoList(newItem);
    setNewItem('');
  }

  return (
    <div>
      <form onSubmit={(e) => addList(e)}>
        <input
          tipe="text"
          placeholder="Ingresa gasto"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}