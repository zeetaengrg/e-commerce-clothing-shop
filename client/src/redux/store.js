import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
