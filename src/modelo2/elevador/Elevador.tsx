import "./Elevador.css"
import "./Cabin.css"
import { useState } from "react";

function Elevador() {
  let esperaBasica = 500;
  //let esperaTudo = 1000;

  let andar3 = 132;
  let andar2 = 291;
  let andar1 = 451;
  let andar0 = 611;

  function resolveAfter2Seconds(x: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, x);
    });
  }

  const [operation, setOperation] = useState(true);
  const [currentFloor, setCurrentFloor] = useState(0);
  const [positionY, setPositionY] = useState(andar0);

  let porta = false;
  //const [porta, setPorta] = useState(false);
  const [p, setP] = useState(100);

  async function mudarAdar(atual: number) {
    switch (atual) {
      case 0:
        console.log("case 0 - " + atual);
        if (atual != currentFloor) {
          setPositionY(andar0);
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
          setPositionY(andar1);
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
          setPositionY(andar2);
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
          setPositionY(andar3);
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

  let realy = false
  async function changePosition(selecionado: number) {
    realy = true;

      if (porta) {
        if (selecionado > currentFloor) {
          console.log("subindo");
          mudarAdar(selecionado);
          realy = false;
          // for (let i = currentFloor; i <= selecionado;) {
          //   if (i != currentFloor) {
          //     console.log("espera antes de subir 1");

          //   } else { console.log("espera antes de subir quando for igual ao andar atual"); await resolveAfter2Seconds(esperaBasica); }
          //   i++;
          // }


        } else if (selecionado < currentFloor) {
          console.log("descendo");
          mudarAdar(selecionado);
          realy = false;
          // for (let i = currentFloor; i >= selecionado;) {
          //   if (i != currentFloor) {
          //     console.log("espera antes de descer 1");
          //     await resolveAfter2Seconds(esperaTudo);
          //   } else { console.log("espera antes de descer 1"); await resolveAfter2Seconds(esperaBasica); }
          //   i--;
          //   console.log("proximo valor de i = " + i);
          // }
        } else {
          console.log("é o mesmo andar");
        }
      } else {
        console.log("porta aberta !!");
      }
  }

  async function fecharPorta( selecionado : number) {
    if (!porta) {
      setOperation(false)
      setP(0);
      console.log("espera fechar a porta");
      await resolveAfter2Seconds(500);
      console.log("fechou");
      porta =true;
      setOperation(true);
      changePosition(selecionado);
    }
    console.log("################################################################################################");
  }
  async function fecharPort() {
    if (operation) {
      setOperation(false)
      setP(0);
      console.log("espera fechar a porta");
      await resolveAfter2Seconds(500);
      console.log("fechou");
      porta =true;
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
    porta = false;
    setOperation(true);
  }

  return (
    <>
      <div id="titulo">Projeto Elevador</div>
      <div id="tudo">
        <div id="space">
          <div id="predio">
            <div id="cabin" style={{ top: positionY }}>
              <div id="door" style={{ width: p }}></div>
            </div>
            <div>
              <div id="f3" className="floor"></div>
              <div id="f2" className="floor"></div>
              <div id="f1" className="floor"></div>
              <div id="T" className="floor"></div>
            </div>
          </div>
          <div id="chao"></div>
        </div>
        <div id="controller">
          <div id="btn" onClick={() => { fecharPorta(3) }}><h2>3</h2></div>
          <div id="btn" onClick={() => { fecharPorta(2) }}><h2>2</h2></div>
          <div id="btn" onClick={() => { fecharPorta(1) }}><h2>1</h2></div>
          <div id="btn" onClick={() => { fecharPorta(0) }}><h2>T</h2></div>
          <div id="btn" onClick={() => { abrirPorta() }}><h2>{`<|>`}</h2></div>
          <div id="btn" onClick={() => { fecharPort() }}><h2>{`>|<`}</h2></div>
        </div>
      </div>
    </>
  )
}


export default Elevador