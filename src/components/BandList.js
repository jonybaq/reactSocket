import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandList = () => {
    //console.log(`dataList`, data);
    const {socket}=useContext(SocketContext);
    const [lista, setlista] = useState([]);
    useEffect(() => {
        socket.on('current-bands',(datos)=>{
            //console.log(datos);
            setlista(datos);
          });
          return socket.off('current-bands');
    }, [socket]);
    const handlChange=(event,key)=>{
        const newName=event.target.value;
        const listaNueva=lista.map(anime=>{
            if (anime.id===key) {
                anime.name=newName;
            }
            return anime;
        });
        setlista(listaNueva);
    }
    const votar=(id)=>{
        socket.emit('votar',id);
    }
    const renombrar=(id,nombre)=>{
      socket.emit('renombrar',id,nombre);
    }
    const eliminar=(id)=>{
      socket.emit('eliminar',id);
    }
    const crearFilasTabla = () => {
        return (
            lista.map(anime => (
                <tr key={anime.id}>
                    <td>
                        <button type="button" className="btn btn-primary" onClick={()=>votar(anime.id)}>+1</button>
                    </td>
                    <td>
                        <input type="text" 
                        className="form-control" 
                        value={anime.name} 
                        onBlur={()=>renombrar(anime.id,anime.name)}
                        onChange={(e)=>handlChange(e,anime.id)}
                        />
                    </td>
                    <td><h3> {anime.votes} </h3></td>
                    <td><button type="button" className="btn btn-danger" onClick={()=>{eliminar(anime.id)}}>Borrar</button></td>
                </tr>
            ))

        );
    }
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {crearFilasTabla()}
                </tbody>
            </table>
        </>
    )
}
