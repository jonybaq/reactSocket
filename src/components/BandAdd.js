import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandAdd = () => {
  const {socket}=useContext(SocketContext);
  const [nombre, setnombre] = useState('');
  const handlerChange=(e)=>{
    setnombre(e.target.value);
  }
  const handlerSubmit=(e)=>{
    e.preventDefault();
    insertar(nombre);
    setnombre('');
  }
  const insertar=(nombre)=>{
    socket.emit('insertar',nombre);
  }
    return (
        <>
           <h3>Anime</h3>
           <form onSubmit={handlerSubmit} >
               <div className="form-group">
                 <input type="text"
                   className="form-control" 
                   name="anime"  value={nombre} 
                   placeholder="Nombre Anime"
                   onChange={handlerChange}
                   />
                 <small id="helpId" className="form-text text-muted">Ejemplo: Pokemon, Digimon,...etc</small>
               </div>
           </form> 
        </>
    )
}
