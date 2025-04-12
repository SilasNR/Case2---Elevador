import "./Elevador.css"
import "./Cabin.css"
import { useState } from "react";

function Elevador() {
  let esperaBasica = 4000;
  let esperaTudo = 12000;

  function resolveAfter2Seconds(x: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, x);
    });
  }

  const [operation, setOperation] = useState(true);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [positionY, setPositionY] = useState(654);

  const [porta, setPorta] = useState(true);
  const [p, setP] = useState(0);

  async function mudarAdar(atual: number) {
    switch (atual) {
      case 0:
        console.log("case 0 - " + atual);
        if (atual != currentFloor) {
          setPositionY(654);
          console.log("espera depois de mudar Y");
          await resolveAfter2Seconds(esperaBasica);
          abrirPorta();
        }
        setCurrentFloor(atual)
        setOperation(true)

        break;
      case 1:
        console.log("case - " + atual);
        if (atual != currentFloor) {
          setPositionY(494);
          console.log("espera depois de mudar Y");
          await resolveAfter2Seconds(esperaBasica);
          abrirPorta();
        }
        setCurrentFloor(atual)
        setOperation(true)

        break;
      case 2:
        console.log("case - " + atual);
        if (atual != currentFloor) {
          setPositionY(334);
          console.log("espera depois de mudar Y");
          await resolveAfter2Seconds(esperaBasica);
          abrirPorta();
        }
        setCurrentFloor(atual)
        setOperation(true)

        break;
      case 3:
        console.log("case - " + atual);
        if (atual != currentFloor) {
          setPositionY(174);
          console.log("espera depois de mudar Y");
          await resolveAfter2Seconds(esperaBasica);
          abrirPorta();
        }
        setCurrentFloor(atual)
        setOperation(true)

        break;

      default:
        break;
    }
  }


  async function changePosition(selecionado: number) {
    if (porta && operation) {
      if (selecionado > currentFloor) {
        console.log("subindo");
        for (let i = currentFloor; i <= selecionado;) {
          mudarAdar(i);
          if (i != currentFloor) {
            console.log("espera antes de subir 1");
            await resolveAfter2Seconds(esperaTudo);
          } else { console.log("espera antes de subir quando for igual ao andar atual"); await resolveAfter2Seconds(esperaBasica); }
          i++;
        }


      } else if (selecionado < currentFloor) {
        console.log("descendo");
        for (let i = currentFloor; i >= selecionado;) {
          mudarAdar(i);
          if (i != currentFloor) {
            console.log("espera antes de descer 1");
            await resolveAfter2Seconds(esperaTudo);
          } else { console.log("espera antes de descer 1"); await resolveAfter2Seconds(esperaBasica); }
          i--;
          console.log("proximo valor de i = " + i);
        }
      } else {
        console.log("é o mesmo andar");
      }
    } else console.log("porta aberta !!");

  }

  async function fecharPorta() {
    if (operation) {
      setOperation(false)
      setP(0);
      console.log("espera fechar a porta");
      await resolveAfter2Seconds(2000);
      console.log("fechou");
      setPorta(true);
      setOperation(true);
    }
    console.log("################################################################################################");
  }

  async function abrirPorta() {
    setOperation(false)
    setP(100);
    console.log("espera abrir a porta");
    await resolveAfter2Seconds(esperaBasica);
    console.log("abriu");
    setPorta(false);
    setOperation(true);
    fecharPorta();
  }

  return (
    <>
      <div id="space">
        <div id="titulo">Projeto Elevador</div>
        <div id="floor" >3</div>
        <div id="floor" >2</div>
        <div id="floor" >1</div>
        <div id="floor" >T</div>
        <div id="cabin" style={{ top: positionY }}>
          <div id="door" style={{ width: p }}>

          </div>
        </div>
      </div>
      <div id="controller">
        <div id="btn" onClick={() => { changePosition(3) }}><h2>3</h2></div>
        <div id="btn" onClick={() => { changePosition(2) }}><h2>2</h2></div>
        <div id="btn" onClick={() => { changePosition(1) }}><h2>1</h2></div>
        <div id="btn" onClick={() => { changePosition(0) }}><h2>T</h2></div>
        <div id="btn" onClick={() => { abrirPorta() }}>abrir</div>
        <div id="btn" onClick={() => { fecharPorta() }}>fechar</div>
      </div>
    </>
  )
}


export default Elevador