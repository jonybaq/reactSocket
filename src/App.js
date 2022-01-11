import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";

import { useContext, useEffect, useState } from "react";
import { useSocket } from "./hooks/useSocket";
import { SocketContext } from "./context/SocketContext";

function App() {
  console.log(`Rederiza...`);
  
  const {online}=useContext(SocketContext);
  //const {socket,online}=useSocket('http://localhost:8080');
  //const [lista, setLista] = useState([]);
  //const [socket,setSocket] = useState(connectSocketServer());
  /*useEffect(() => {
    socket.on('current-bands',(datos)=>{
      console.log(datos);
      setLista(datos);
    });
  }, [socket]);*/

 /* const votar=(id)=>{
      socket.emit('votar',id);
  }
  const renombrar=(id,nombre)=>{
    socket.emit('renombrar',id,nombre);
  }
  const eliminar=(id)=>{
    socket.emit('eliminar',id);
  }

  const insertar=(nombre)=>{
    socket.emit('insertar',nombre);
  }*/

  return (
    <div className="container">
      <div className="alert">
         <p>
           Services status:  
           {
            online?
            <span className="text-success"> Online</span>
            :
            <span className="text-danger"> Offline</span>
           }
           
           
         </p>
      </div>
      <h1>Anime Names</h1>
      <hr></hr>
      <div className="row">
        <div className="col-8">
         <BandList/>
        </div>
        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  );
}

export default App;
