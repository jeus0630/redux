import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const updateUser = createAsyncThunk("users/update", async (user) => {
    const res = await fetch("http://localhost:8080/api/users/1/");
    const data = await res.json();

    return data;
})

export const deleteUser = createAsyncThunk("users/delete", async (user) => {
    const res = await fetch("http://localhost:8080/api/users/1/");
    const data = await res.json();

    return data;
})

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
        remove: (state) => (state = {})
    },
    extraReducers:{
        [updateUser.pending] : (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser.fulfilled] : (state,action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        [updateUser.rejected] : (state) => {
            state.pending = false;
            state.error = true;
        },
        [deleteUser.pending] : (state) => {
            state.pending = true;
            state.error = false;
        },
        [deleteUser.fulfilled] : (state,action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        [deleteUser.rejected] : (state) => {
            state.pending = false;
            state.error = true;
        }
    }
})

export const {update, remove} = userSlice.actions;  
export default userSlice.reducer;