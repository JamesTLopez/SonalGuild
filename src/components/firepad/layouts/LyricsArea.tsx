import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Delta {
  title?: string;
  content?: string;
  createDate: Date;
  featureImage?: string;
  isPublished: boolean;
  lastModified: Date;
  createUserId: string;
}

function LyricsArea() {
  const [delta, setDelta] = useState<Delta>({
    title: "",
    content: "",
    createDate: new Date(),
    featureImage: "",
    isPublished: false,
    lastModified: new Date(),
    createUserId: "james",
  });

  const [value, setValue] = useState('');

  const onSumbitLyric = () => {
    console.log(delta);
  };

  return (
    <div className="lyric-container">
      <button style={{color:'black'}} onClick={onSumbitLyric}>Click me Dudes!</button>
      <div className="lyric-textarea">
          <div className="theory">

          </div>
          <div className="text">
                  <ReactQuill theme="snow" value={value} onChange={setValue}/>

          </div>

      </div>
  
    </div>
  );
}

export default LyricsArea;
