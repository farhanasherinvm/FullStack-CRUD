import {createSlice} from '@reduxjs/toolkit'

const initialState={
   user: null,
   token: localStorage.getItem("accessToken") || null,
};

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginSuccess:(state,action)=>{
            state.user=action.payload.user;
            state.token=action.payload.token;
            localStorage.setItem("accessToken", action.payload.token);

        },

    },
})
export const {loginSuccess}=authSlice.actions;
export default authSlice.reducer;