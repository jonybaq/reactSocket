import { BandAdd } from "../components/BandAdd";
import { BandList } from "../components/BandList";

import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";

function HomePage() {
  console.log(`Rederiza...`);
  const {online}=useContext(SocketContext);
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

export default HomePage;
