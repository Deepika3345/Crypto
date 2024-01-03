import { configureStore } from "@reduxjs/toolkit";
import coinReducer from './tools/toolslice'

const store = configureStore(
    {
        reducer: {
            coins: coinReducer

        }
    }
)
export default store