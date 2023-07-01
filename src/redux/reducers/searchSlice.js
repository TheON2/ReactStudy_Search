import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category:1,
  data:null
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeCategory:(state,action) =>{
      state.category=action.payload
    },
    searchResult:(state,action) =>{
      state.data=action.payload.documents
    }
  },
})

export const {changeCategory,searchResult} = searchSlice.actions

export default searchSlice.reducer