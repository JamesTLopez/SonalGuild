import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Scale, Note, Key ,Interval} from "@tonaljs/tonal";

function LyricsArea() {
  const NOTES = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]; 
  const [tempState, setTemp] = useState<any>({
    key: "C",
    chord: Key.majorKey("C"),
    scale: Scale.get("C major"),
    type: "major",
  });


  const [theoryActivated, isActivated] = useState<boolean>(false);
  const [value, setValue] = useState("");


  function changeKey(key: string) {
    switch (key) {
      case "UP":
        let index = NOTES.indexOf(tempState.key) ;
        let newKey = NOTES[index + 1];
        
        if(newKey === undefined){
          newKey = NOTES[0];
        }
 
        setTemp({
          key: newKey,
          chord: Key.majorKey(newKey),
          scale: Scale.get(`${newKey} ` + tempState.type),
          type:"major"
        });

        break;
      case "DOWN":

        let indexs = NOTES.indexOf(tempState.key) ;
        let newKeys = NOTES[indexs - 1];

        if(newKeys === undefined){
          newKeys = NOTES[11];
        }
 
        setTemp({
          key: newKeys,
          chord: Key.majorKey(newKeys),
          scale: Scale.get(`${newKeys} ` + tempState.type),
          type:"major"
        });

        break;
      default:
        console.log("error");
    }
  }

  return (
    <div className="lyric-container">
      <div className="song-toolbar">
        <div className="firepad-controller">
          <button onClick={() => isActivated(!theoryActivated)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z"></path>
              </g>
            </svg>
          </button>
          <div className="Key-controller">
            <label>Key</label>
            <div className="key-display">{`${tempState.key} ${tempState.type}`}</div>
          </div>
          <div className="sep-vertical"></div>
          <div className="Transpose-controller">
            <label>Transpose</label>
            <div className="button-group">
              <button onClick={() => changeKey("UP")}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>
              <button onClick={() => changeKey("DOWN")}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lyric-textarea">
        <div className={!theoryActivated ? "theory" : "displayNone"}>
          <div className="key">
            <div className="key-container">
              <h1>{`${tempState.key} ${tempState.type}`}</h1>
              <div className="item-list">
                <div className="left-panel">
                  <p>I</p>

                  <p>ii</p>
                  <p>iii</p>
                  <p>iV</p>
                  <p>V</p>
                  <p>Vii</p>
                  <p>Viii</p>
                </div>
                <div className="vert-sep"></div>
                <div className="right-panel">
                  {tempState.scale.notes.map((note: string, index: number) => (
                    <div
                      className="note"
                      draggable={true}
                      onDragStart={(event: any) => console.log(event)}
                      key={index}
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <textarea onDrop={drop} onDragOver={(event:any)=>event.preventDefault()}></textarea> */}

        <div className="text">
          <ReactQuill value={value} theme="snow" onChange={setValue} />
        </div>
      </div>
    </div>
  );
}

export default LyricsArea;
