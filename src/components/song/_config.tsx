import { Chord } from "svguitar";

const chordConfig:Chord = {
    fingers: [
      // finger at string 1, fret 2, with text '2'
      [1, 2, "2"],

      // finger at string 2, fret 3, with text '3', colored red
      [2, 3, { text: "3", color: "#F00" }],

      // finger is triangle shaped
      [3, 3],
      [6, "x"],
    ],

    // optional: barres for barre chords
    barres: [
      {
        fromString: 5,
        toString: 1,
        fret: 1,
        text: "1",
        color: "black",
        textColor: "#F00",
      },
    ],
  }

export  default chordConfig;