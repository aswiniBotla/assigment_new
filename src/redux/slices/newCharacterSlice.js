import { createSlice } from "@reduxjs/toolkit";

let defaultState = [
  {
    characterName: "robert Einstein",
    tagLine: "Anime Lover",
    description: "I would like watch anime",
    greeting: "thank you",
    defination: "about Anime",
    visibility: "public",
  },
];

const newCharacterSlice = createSlice({
  name: "newCharacter",
  initialState: defaultState,
  reducers: {
    addCharacter: (state, action) => {
      // state = [...state, action.payload];
      state.push(action.payload);
    },
  },
});

export const { addCharacter } = newCharacterSlice.actions;
export default newCharacterSlice.reducer;
