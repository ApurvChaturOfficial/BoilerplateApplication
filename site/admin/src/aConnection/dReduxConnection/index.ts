import { configureStore } from "@reduxjs/toolkit";

import apiConnection from "../cAPIConnection";


const reduxConnection = configureStore({
  reducer: {
    [apiConnection.reducerPath]: apiConnection.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiConnection.middleware)
})

export default reduxConnection;
export type RootState = ReturnType<typeof reduxConnection.getState>;
export type RootDispatch = typeof reduxConnection.dispatch;
