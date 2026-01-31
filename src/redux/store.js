import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './Features/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer
  },
})