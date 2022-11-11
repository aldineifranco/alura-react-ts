import React, { useState } from "react";
import Cronometro from "../components/cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Estado from "../components/UseState/UseState";
import style from "./App.module.scss";
import { ITarefas } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
