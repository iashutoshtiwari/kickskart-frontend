import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
  isModalOpen: boolean
  isSignUp: boolean
  user: { email: string; name: string } | null
  error: string | null
}

const initialState: AuthState = {
  isModalOpen: false,
  isSignUp: false,
  user: null,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openAuthModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = true
      state.isSignUp = action.payload
      state.error = null
    },
    closeAuthModal: (state) => {
      state.isModalOpen = false
      state.error = null
    },
    toggleAuthMode: (state) => {
      state.isSignUp = !state.isSignUp
      state.error = null
    },
    setAuthError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    loginUser: (state, action: PayloadAction<{ email: string; name: string }>) => {
      state.user = action.payload
      state.isModalOpen = false
      state.error = null
    },
    logoutUser: (state) => {
      state.user = null
    },
  },
})

export const { openAuthModal, closeAuthModal, toggleAuthMode, setAuthError, loginUser, logoutUser } = authSlice.actions
export default authSlice.reducer
