import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { productCreate, productGet, productPatch, productDelete, productImageDelete, productGetOne } from "./Propertiesservice"
import { toast } from "react-toastify";

export const createProduct = createAsyncThunk("product-create", async (data, thunkApi) => {
    try {
        const formData = new FormData()
        for (let i = 0; i < data.images.length; i++) {
            formData.append("images", data.images[i])
        }
        formData.append("propertie_name", data.propertie_name)
        formData.append("product_price", data.product_price)
        formData.append("address", data.address)
        formData.append("country", data.country)
        formData.append("option", data.option)
        const response = await productCreate(formData)
        thunkApi.dispatch(getProduct())


        return response
    } catch (err) {
        toast.error(err?.response?.data?.message)
        return thunkApi.rejectWithValue(err);
    }
})


export const getProduct = createAsyncThunk("product-get", async (thunkApi) => {
    try {

        const response = await productGet()
        return response
    } catch (err) {
        toast.error(err?.response?.data?.message)
        return thunkApi.rejectWithValue(err);

    }
})

export const patchProduct = createAsyncThunk("product-patch", async (data, thunkApi) => {
    try {

        const response = await productPatch(data)
        thunkApi.dispatch(getProduct())
        return response
    } catch (err) {
        toast.error(err?.response?.data?.message)
        return thunkApi.rejectWithValue(err);
    }
})

export const deletProduct = createAsyncThunk("product-delete", async (data, thunkApi) => {
    try {

        const response = await productDelete(data)
        thunkApi.dispatch(getProduct())
        return response
    } catch (err) {
        toast.error(err?.response?.data?.message)
        return thunkApi.rejectWithValue(err);
    }
})


export const ProductgetOne = createAsyncThunk("product-one-image", async (data, thunkApi) => {
    try {

        const response = await productGetOne(data)

        return response
    } catch (err) {
        toast.error(err?.response?.data?.message)
        return thunkApi.rejectWithValue(err);
    }
})

export const ProductImage = createAsyncThunk("product-image-delete", async (data, thunkApi) => {
    try {

        const response = await productImageDelete(data)
        thunkApi.dispatch(productGetOne());
        return response
    } catch (err) {
        toast.error(err?.response?.data?.message)
        return thunkApi.rejectWithValue(err);
    }
})


const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    productsGet: [],
    getOneproduct: {}
}

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        resetSuccessState: (state) => {
            state.isSuccess = false;
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isError = false
                state.isLoading = false
                if(state.isSuccess){
                    toast.success("Properties is Added")
                }
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isSuccess = false
                state.isError = true
                state.isLoading = false
            })
            .addCase(getProduct.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isError = false
                state.isLoading = false
                state.productsGet = action.payload?.message
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.isSuccess = false
                state.isError = true
                state.isLoading = false
            })

            .addCase(deletProduct.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(deletProduct.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isError = false
                state.isLoading = false

                if(state.isSuccess){
                    toast.error("Properties is deleted")
                }
            })
            .addCase(deletProduct.rejected, (state, action) => {
                state.isSuccess = false
                state.isError = true
                state.isLoading = false
            })

            .addCase(ProductImage.pending, (state, action) => {
                state.isSuccess = true
            })
            .addCase(ProductImage.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isError = false

            })
            .addCase(ProductImage.rejected, (state, action) => {
                state.isSuccess = false
                state.isError = true
            })

            .addCase(ProductgetOne.pending, (state, action) => {
                state.isSuccess = true
            })
            .addCase(ProductgetOne.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isError = false
                state.getOneproduct = action.payload?.message

            })
            .addCase(ProductgetOne.rejected, (state, action) => {
                state.isSuccess = false
                state.isError = true
            })
    }

})
export const { resetSuccessState } = ProductSlice.actions;
export default ProductSlice.reducer