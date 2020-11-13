import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Scale } from "@tonaljs/tonal";


function LyricsArea() {
  const [theoryActivated, isActivated] = useState<boolean>(false);
  const [currentKey] = useState(Scale.get("G major"));
  const [value, setValue] = useState("");


  function drop(event:any) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    console.log(data)
  }

  function changeKey(key:string){
    switch(key){
      case "UP":
        console.log("transpose up");
        
        break;
      case "DOWN":
        console.log("transpose down");
        break;
      default:
        console.log('error')
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
            <div className="key-display">C Major</div>
          </div>
          <div className="sep-vertical"></div>
          <div className="Transpose-controller">
            <label>Transpose</label>
            <div className="button-group">
              <button onClick={()=>changeKey("UP")}>
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
              <button onClick={()=>changeKey("DOWN")}>
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
              <h1>{currentKey.name}</h1>
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
                  {currentKey.notes.map((note, index) => (
                    <div className="note" draggable={true} onDragStart={(event:any)=>console.log(event)} key={index}>
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <textarea onDrop={drop} onDragOver={(event:any)=>event.preventDefault()}></textarea>

        <div className="text">
          <ReactQuill value={value} theme="snow" onChange={setValue} />
        </div>
      </div>
    </div>
  );
}

export default LyricsArea;
