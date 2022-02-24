import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "john",
        email: "john@gmail.com"
    },
    reducers: {
        update: (state,action) => {
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        },
        remove: (state) => (state = {}),
        add: 
    }
})

export const {update, remove} = userSlice.actions;  
export default userSlice.reducer;