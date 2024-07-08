import { configureStore } from "@reduxjs/toolkit";
import citySlice from "../citySlice/citySlice";

const store = configureStore({
  reducer: { city: citySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
