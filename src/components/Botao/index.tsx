import React from "react";

class Botao extends React.Component {
  render() {
    const estaAtivo = false;
    const styles = {
      backgroundColor: estaAtivo ? "blue" : "red",
    };
    return <button style={styles}>Botão</button>;
  }
}

export default Botao;
