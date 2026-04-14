import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  if (hide) return null;

  return (
    <div>
      {hide && <p>Teste1</p>}
      {!hide && <p>Teste2</p>}

      {hide ? <p>Teste1</p> : <p>Teste2</p>}
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setHide(!hide)}>Toggle</button>
    </div>
  );
}
