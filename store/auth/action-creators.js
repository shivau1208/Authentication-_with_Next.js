import { authenticate, deAuthenticate, restoreAuthSate } from "./auth-slice"
import {setCookie,deleteCookie} from 'cookies-next'

export const loginUser = (user) => async (dispatch) => {
    setCookie('cid',user.token,{
        maxAge:3600,
        sameSite:true,
        secure:true,
    })
    dispatch(authenticate(user))
};

export const logoutUser = (user) => async (dispatch) => {
    deleteCookie('token');
    dispatch(deAuthenticate(user));
};

export const checklogin = (user) => async (dispatch) => {
    dispatch(restoreAuthSate(user));
}
