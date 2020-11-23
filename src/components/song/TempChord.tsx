import React, { useState ,useEffect} from "react";
import { SVGuitarChord } from "svguitar";
import { Scale, Key } from "@tonaljs/tonal";
import {Fsharp,Cmajor}  from "./chords";
import config from './_config'


function TempChord() {

const chart = new SVGuitarChord("#chart");
chart
  .chord(Fsharp)
  .configure(config)
  
  const [] = useState<any>({
    key: "C",
    chord: Key.majorKey("C"),
    scale: Scale.get("C major"),
    type: "major",
  });

  const [theoryActivated, isActivated] = useState<boolean>(true);



  useEffect(()=>{
    chart
    .draw();

  },[])

  const showChord = () => {
      isActivated(!theoryActivated)
     console.log(theoryActivated)
     if(theoryActivated){
      chart.remove();
     }else{
       chart.draw();
     }
 

      
  };

  return (
    <div>
      <div>
        dsds
        <button onClick={showChord}>Showchord</button>
        {/* <button onClick={()=> isActivated(!theoryActivated)}>TiggkeChart</button> */}
      </div>
        <div id="chart"></div>
    </div>
  );
}

export default TempChord;
