import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  user: {
    email: '',
    phone: '',
    fullName: '',
    role: '',
    avatar: '',
    id: ''
  },
  status: 'idle'
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    doLoginAction: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    doGetAccountAction: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: builder => {}
})

export const { doLoginAction, doGetAccountAction } = accountSlice.actions

export default accountSlice.reducer