import { createSlice, current } from "@reduxjs/toolkit"

let initialState = []

let CartSlice = createSlice({
  name : 'cart',
  initialState,
  reducers : {
    add(state, action){
      console.log("state in add ", state);
      state.push(action.payload)
    },
    remove(state, action){      
      console.log("state in remove ", current(state));
      return state.filter((x)=> {
        if(action.payload != x.id) {
          return x
        }
      })
    }
  }
})

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;