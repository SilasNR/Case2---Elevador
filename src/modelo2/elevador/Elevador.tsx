import "./Elevador.css"
import Cabin from "../Cabine/Cabin"


function Elevador() {

  return (
    <>
      <div id="space">
        <Cabin></Cabin>
      </div>
      <div id="controller">
        <div id="btnDoor"></div>
      </div>
    </>
  )
}

export default Elevador