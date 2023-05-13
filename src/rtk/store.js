import { configureStore } from '@reduxjs/toolkit'
import reducer_1 from './slice_1'

export const store = configureStore({
  reducer: {
    reducer_1:reducer_1,
  },
})
