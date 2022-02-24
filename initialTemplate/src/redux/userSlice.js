import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "john",
        email: "john@gmail.com"
    },
    reducers: {
        update: (state,action) => {
            state = action.payload;
        }
    }
})

export const {update} = userSlice.actions;
export default userSlice.reducer;