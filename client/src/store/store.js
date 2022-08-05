import { createSlice, configureStore } from "@reduxjs/toolkit";

const connectSlice = createSlice({
  name: "connect",
  initialState: {
    connected: false,
    walletAddress: "",
  },
  reducers: {
    connect: (state) => {
      state.connected = true;
      state.walletAddress = "newaddress";
    },
    disconnect: (state) => {
      state.connected = false;
      state.walletAddress = "";
    },
  },
});

const store = configureStore({
  reducer: {
    connection: connectSlice.reducer,
  },
});

export const { connect, disconnect } = connectSlice.actions;

export { store };
