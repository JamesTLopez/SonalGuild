import React, { useState } from "react";
import ReactQuill  from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Note, Interval, Scale } from "@tonaljs/tonal";

interface Delta {
  id:number;
  title?: string;
  key:string;
  content?: string;
  createDate?: Date;
  isPublished: boolean;
  lastModified?: Date;  
  featureImage?: string;
}



function LyricsArea() {

  const [theoryActivated, isActivated] = useState<boolean>(false);
  // const [delta,setDelta] = useState<Delta>({
  //   id:1,
  //   title:"temporary State",
  //   key:"C major",
  //   content:"Terry ate the cheese",
  //   isPublished:true
  // });
  const [currentKey,setKey] = useState(Scale.get('G major'));

  const [value, setValue] = useState('')


  const onSumbitLyric = () => {
 
    console.log(Scale.get("C major"))
    isActivated(!theoryActivated);
  };

  const onChangeKey = () => {
 
    console.log(currentKey)
   
  };

  return (
    <div className="lyric-container">
      <button onClick={onSumbitLyric}>
        Click me Dudes!
      </button>
      <button onClick={onChangeKey}>
        Changethe KEY
      </button>
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
                    {currentKey.notes.map((note) => (
                      <p>{note}</p>
                    ))}

                  </div>
                </div>
            </div>

          </div>
        </div>
        <div className="text">
          <ReactQuill value={value} theme="snow"  onChange={setValue} />

          
        </div>
      </div>
    </div>
  );
}

export default LyricsArea;
