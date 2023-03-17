import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const payload = action.payload;

      const index = state.cart.findIndex((item) => item._id === payload._id);

      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    RemoveItemFromCart: (state, action) => {
      const payload = action.payload;
      const index = state.cart.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.cart[index].quantity -= 1;
        if (state.cart[index].quantity === 0) {
          state.cart.splice(index, 1);
        }
      }
    },
    DeleteItem: (state, action) => {
      const payload = action.payload;
      const index = state.cart.findIndex((item) => item._id === payload._id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export const selectCountOf = (state, payload) => {
    return (
        state.cart.cart?.find((item) => item._id === payload._id) ?.quantity || 0
    );
};
export const selectCountAll = (state) => {
    return state.cart.cart?.reduce((a, b) => a + b.quantity, 0);
};
export const selectTotal = (state) => {
    return state.cart.cart?.reduce((a, b) => a + b.quantity * b.price, 0);
};
export const selectCart = (state) => {
    return state.cart.cart;
};

export const {
  addItemToCart,
  RemoveItemFromCart,
  DeleteItem
} = cartSlice.actions;

export default cartSlice.reducer;
