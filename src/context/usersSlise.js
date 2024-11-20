import { createSlice } from "@reduxjs/toolkit";
export const usersSlise = createSlice({
  name: "users",
  initialState: {
    value: JSON.parse(localStorage.getItem("users")) || [],
  },
  reducers: {
    addToUsers(state, actions) {
      state.value = [...state.value, actions.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    removeFromusers(state, actions) {
      state.value = state.value.filter(
        (user) => user.id !== actions.payload.id
      );
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    updateUsers(state, actions) {
      state.value = state.value.map((user) => {
        if (user.id === actions.payload.id) {
          return { ...user, ...actions.payload };
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(state.value));
    },
  },
});
export const { addToUsers, removeFromusers, updateUsers } = usersSlise.actions;
export default usersSlise.reducer;
