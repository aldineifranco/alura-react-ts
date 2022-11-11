import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import "./UseState.scss";

export default function Estado() {
  const [valor, setValor] = useState(0);
  const [user] = useState({
    id: 1,
    name: "Aldinei",
    idade: 38,
    photo:
      "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
  });

  function aumentar() {
    setValor(valor + 1);
  }

  function diminuir() {
    setValor(valor - 1);
  }

  return (
    <>
      <div>
        Quantidade produtos no carrinho: <b>{valor}</b>
      </div>
      <button className="button-state" onClick={aumentar}>
        Adicionar 1
      </button>
      <button className="button-state" onClick={diminuir}>
        Retirar 1
      </button>
      <hr />

      <div className="card">
        <img className="image" src={user.photo} alt="" />
        <div>
          <p>
            Nome do Usuário: <b>{user.name}</b>
          </p>
          <p>
            Idade: <b>{user.idade}</b>
          </p>
        </div>
      </div>
    </>
  );
}
