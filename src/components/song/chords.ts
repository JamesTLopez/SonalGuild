import { Chord, ChordSettings } from "svguitar";

export const Cmajor: Chord = {
  fingers: [
    [1, 2, "2"],
    [2, 3, { text: "3", color: "#F00" }],
    [3, 3],
    [6, "x"],
  ],
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
};

export const Fsharp: Chord = {
  fingers: [
    [1, 2, "2"],
    [2, 3, { text: "3", color: "#F00" }],
    [3, 3],
    [6, "x"],
  ],
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
};
