import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action : PayloadAction<any>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions
export const selectUser = ( state : RootState) => state.user.user
export default userSlice.reducer