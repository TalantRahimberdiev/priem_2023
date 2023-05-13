
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   language: 'кыр',
   opened: false,
}

export const slice_1 = createSlice({
   name: 'burger_language',
   initialState,
   reducers: {
      changeLanguage: state => {
         state.language = state.language === 'ру' ? 'кыр' : 'ру'
      },
   },
})

export const { changeLanguage} = slice_1.actions
export default slice_1.reducer