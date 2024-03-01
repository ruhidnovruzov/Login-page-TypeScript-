import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = []

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        userInfo: (state, action) =>{
            return([...state, action.payload])
        }
    }
})

export const {userInfo} = userSlice.actions
export default userSlice.reducer