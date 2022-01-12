import { BandAdd } from "../components/BandAdd";
import { BandList } from "../components/BandList";

import { useContext} from "react";
import { SocketContext } from "../context/SocketContext";
import { BandChart } from "../components/BandChart";

function HomePage() {
  console.log(`Rederiza...`);
  const {online}=useContext(SocketContext);
  return (
    <div className="container">
      <div >
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
      <h4>Anime Names</h4>
      <div className="row">
        <div className="col">
        <BandChart/>
        </div>
      </div>
      
      
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
