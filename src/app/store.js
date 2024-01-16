 import { configureStore } from '@reduxjs/toolkit'
 import donationSlice from '../features/dontion/dontionSlice'
 
 
 export const store = configureStore({
  reducer: {
    dontion: donationSlice
  },
 })