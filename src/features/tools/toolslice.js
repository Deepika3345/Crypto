import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import authService, { detail, fetchCoins, search } from "./toolService";
import authService, {  fetchCoins, search } from "./toolService";


const userExist = JSON.parse(localStorage.getItem("user")
)
const initialState = {

    user: userExist ? userExist : null,
    coin: {},
    coins: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    searchOne: ""

}

const toolslice = createSlice(
    {
        name: "coins",
        initialState,
        reducers: {
            // coinGet : (id) =>{
            //     state.coin = state.coins.filter((item)=>item.coin_id===id)[0]
            // }
            setSearchResult: (state, action) => {
                state.searchOne = action.payload;
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(RegisterUser.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(RegisterUser.fulfilled, (state, action) => {
                    state.isLoading = false,
                        state.isSuccess = true,
                        state.user = action.payload

                })
                .addCase(RegisterUser.rejected, (state, action) => {
                    state.isSuccess = false,
                        state.isError = true,
                        state.message = action.payload
                })

                // Logout
                .addCase(logOutUser.fulfilled, (state, action) => {
                    state.isSuccess = false,
                        state.isError = false,
                        state.user = null
                })
                //  Login

                .addCase(logInUser.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(logInUser.fulfilled, (state, action) => {
                    state.isLoading = false,
                        state.isSuccess = true,
                        state.isError = false,
                        state.message = ""
                    state.user = action.payload

                })
                .addCase(logInUser.rejected, (state, action) => {
                    state.isSuccess = false,
                        state.isError = true,
                        state.message = action.payload
                })


                // Fetch 
                .addCase(getCoin.pending, (state) => {
                    state.isLoading = true

                })
                .addCase(getCoin.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true,
                        state.coins = action.payload

                })
                .addCase(getCoin.rejected, (state) => {
                    state.isSuccess = false,
                        state.isError = true


                })
                //  search 
                .addCase(searchCoin.pending, (state) => {

                    state.isLoading = true
                    state.isError = false

                })
                .addCase(searchCoin.fulfilled, (state, action) => {
                    state.isError = false,
                        state.isLoading = false,
                        state.isSuccess = true,
                        state.searchOne = action.payload

                })
                .addCase(searchCoin.rejected, (state) => {
                    state.isLoading = false,
                        state.isSuccess = false
                    state.isError = true


                })




        }
    }
)
export default toolslice.reducer
export const { coinGet, setSearchResult } = toolslice.actions
// RegisteUser

export const RegisterUser = createAsyncThunk("REGISTER/USER", async (formData, thunkAPI) => {
    try {
        return await authService.register(formData)

    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)

    }
})

// Logout

export const logOutUser = createAsyncThunk("LOGOUT/USER", async () => {
    localStorage.removeItem("user")
})

// LoginUser

export const logInUser = createAsyncThunk("LOGIN/USER", async (formData, thunkAPI) => {
    try {

        return await authService.login(formData)


    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)

    }
})


// FetchCoins

export const getCoin = createAsyncThunk("FETCH/COINS", async () => {
    try {
        return await fetchCoins()

    } catch (error) {
        console.log(error)
    }
})

// detail

// export const getDetail = createAsyncThunk("DETAIL/COINS", async (coinId) => {
//     try {
//         return await detail(coinId)
//     } catch (error) {
//         console.log(error)
//     }
// })


// search

export const searchCoin = createAsyncThunk("SEARCH/COINS", async () => {
    try {
        return await search()
    } catch (error) {
        console.log(error)

    }
})
