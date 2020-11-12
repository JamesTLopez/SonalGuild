import React, { useState } from "react";

function SongToolbar() {
  return (
    <div className="song-toolbar">
      <div className="firepad-controller">
        <div className="Key-controller">
          <label>Key</label>
          <div className="key-display">C Major</div>
        </div>
        <div className="sep-vertical"></div>
        <div className="Transpose-controller">
          <label>Transpose</label>
          <div className="button-group">
            <button>
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
            <button>
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
        <button>
        <label>Notes</label>
        
        </button>
      </div>

     
    </div>
  );
}

export default SongToolbar;
