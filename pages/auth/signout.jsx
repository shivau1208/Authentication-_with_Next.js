import { logoutUser } from '../../store/auth/action-creators';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from 'cookies-next';

export const getServerSideProps = async ({req,res}) => {
    const cookie = getCookie("cid",{req,res});
    if(!cookie) return {props : {isAuthenticated :false}};
    try{
      const isAuthenticated = await jwt.verify(
        cookie,
        process.env.JWT_KEY,
      );
      return {props : {isAuthenticated : isAuthenticated}};
    }catch (err) {
      return {props :{isAuthenticated :false}};
    }
};

export default function Signout({isAuthenticated}) {
    const dispatch = useDispatch();
    const isloggedIn = useSelector((state)=>({
      'loggedIn':state.auth?.isLoggedIn,
    }))
    const router = useRouter();
    useEffect(()=>{
        if(!isloggedIn.loggedIn){
          if(typeof window !== 'undefined'){
            router.push(`${window.location.origin}/auth/signin`)

          }
        }
    },[isAuthenticated,isloggedIn.loggedIn])
    return (
        <div>
            <div className="btn btn-danger m-5" onClick={()=>dispatch(logoutUser())}>Sign Out</div>
        </div>
    )
}
