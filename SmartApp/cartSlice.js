import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {articles: []},
    reducers: {
      addedToCart(state, action) {
        state.articles.push(action.payload)
      }
    }
  })

export const {addedToCart} = cartSlice.actions;
export default cartSlice.reducer;