import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: JSON.parse(localStorage.getItem("pastes")) || [],
};

const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      state.pastes.push(action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created 🚀");
    },

    updateToPastes: (state, action) => {
      const index = state.pastes.findIndex(
        (p) => p._id === action.payload._id
      );

      if (index !== -1) {
        state.pastes[index] = action.payload;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated ✨");
      }
    },

    removeFromPastes: (state, action) => {
      state.pastes = state.pastes.filter(
        (p) => p._id !== action.payload
      );
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste deleted 🗑️");
    },
  },
});

export const { addToPastes, updateToPastes, removeFromPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
