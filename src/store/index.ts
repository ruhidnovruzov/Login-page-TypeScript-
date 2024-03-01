import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user"
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    user: UserReducer,
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}



const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
})