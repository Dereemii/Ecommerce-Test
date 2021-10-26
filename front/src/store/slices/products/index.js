import { createSlice } from "@reduxjs/toolkit";

//axios
import axios from "axios";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
    },
    reducers: {
        setProductList: (state, action) => {
            state.list = action.payload;
        }
    },
});

export default productSlice.reducer;

export const { setProductList } = productSlice.actions

export const fetchAllProducts = () => (dispatch) => {
    axios
        .get("http://localhost:5000/api/products")
        .then((response) => {
            dispatch(setProductList(response.data));
        })
        .catch((error) => console.log(`There's an error: ${error}`));
};
