import { configureStore } from "@reduxjs/toolkit";
import usersSlise from "./usersSlise";
export const store = configureStore({
  reducer: {
    users: usersSlise,
  },
});
