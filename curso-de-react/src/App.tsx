import { useState } from "react";

import { InputAdd } from "./components/InputAdd";

export function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: "1", label: "Fazer café", complete: false },
    { id: "2", label: "Fazer café", complete: false },
    { id: "3", label: "Fazer almoço", complete: false },
    { id: "4", label: "Fazer janta", complete: false },
  ]);

  return (
    <div>
      <InputAdd />

      <input value={value} on onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          setList([
            ...list,
            { id: (list.length + 1).toString(), label: value, complete: false },
          ]);
          setValue("");
        }}
      >
        Adicionar
      </button>
      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>
            {listItem.label}

            {listItem.complete ? "Concluído" : ""}

            <button
              onClick={() =>
                setList([
                  ...list.map((item) => ({
                    ...item,
                    complete: item.id === listItem.id ? true : item.complete,
                  })),
                ])
              }
            >
              Concluir
            </button>

            <button
              onClick={() =>
                setList([...list.filter((item) => item.id !== listItem.id)])
              }
            >
              Remover
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
