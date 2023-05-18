import { createSlice } from "@reduxjs/toolkit";

import { getCookie } from "cookies-next";


const initialState = getCookie('token') ? {
    isLoggedIn: true,
    user : {
        userRole:'USER',
        token:''
    }
} : {
    isLoggedIn : false,
    user : {
        userRole:'USER',
        token:''
    }
}

export const authSlice = createSlice({
    name :'auth',
    initialState : initialState,
    reducers : {
        deAuthenticate : (state) =>{
            state.isLoggedIn = false;
        },
        authenticate: (state,action) =>{
            state.isLoggedIn = true;
            state.user= action.payload;
        },
        restoreAuthSate: (state,action)=>{
            state.isLoggedIn =true;
            state.user= action.payload;
        },
    },
});

export const { deAuthenticate,authenticate,restoreAuthSate} = authSlice.actions;
export default authSlice.reducer;