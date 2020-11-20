import React, { useState ,useEffect} from "react";
import { SVGuitarChord } from "svguitar";
import { Scale, Key } from "@tonaljs/tonal";
import chordConfig from './_config'

const chart = new SVGuitarChord("#chart");
chart
  .chord(chordConfig)
  .configure({
    strings: 6,

    frets: 4,

    position: 1,

    tuning: ["E", "A", "D", "G", "B", "E"],

    fretLabelFontSize: 38,

    tuningsFontSize: 28,

    nutSize: 0.65,

    nutColor: "#000",

    nutTextColor: "#FFF",

    nutTextSize: 22,

    fretSize: 1.5,

    sidePadding: 0.2,

    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',

    title: "F# minor",

    titleFontSize: 48,

    titleBottomMargin: 0,

    color: "#000",

    backgroundColor: "none",

    barreChordRadius: 0.25,

    emptyStringIndicatorSize: 0.6,

    strokeWidth: 2,

    topFretWidth: 10,

    titleColor: "#000000",

    stringColor: "#000000",

    fretLabelColor: "#000000",

    tuningsColor: "#000000",

    fretColor: "#000000",

    fixedDiagramPosition: false,
  })

function TempChord() {
  const NOTES = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const [tempState, setTemp] = useState<any>({
    key: "C",
    chord: Key.majorKey("C"),
    scale: Scale.get("C major"),
    type: "major",
  });

  const [theoryActivated, isActivated] = useState<boolean>(true);
  const [value, setValue] = useState("");




  useEffect(()=>{
    chart
    .draw();

  },[])

  function changeKey(key: string) {
    switch (key) {
      case "UP":
        let index = NOTES.indexOf(tempState.key);
        let newKey = NOTES[index + 1];

        if (newKey === undefined) {
          newKey = NOTES[0];
        }

        setTemp({
          key: newKey,
          chord: Key.majorKey(newKey),
          scale: Scale.get(`${newKey} ` + tempState.type),
          type: "major",
        });
        console.log(tempState);
        break;
      case "DOWN":
        let indexs = NOTES.indexOf(tempState.key);
        let newKeys = NOTES[indexs - 1];

        if (newKeys === undefined) {
          newKeys = NOTES[11];
        }

        setTemp({
          key: newKeys,
          chord: Key.majorKey(newKeys),
          scale: Scale.get(`${newKeys} ` + tempState.type),
          type: "major",
        });

        break;
      default:
        console.log("error");
    }
  }

  const showChord = () => {
      isActivated(!theoryActivated)
     console.log(theoryActivated)

       
  
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
