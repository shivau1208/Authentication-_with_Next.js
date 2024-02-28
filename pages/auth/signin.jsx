import { postData } from '../../lib/request';
import { loginUser } from '../../store/auth/action-creators';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Home.module.scss'
import axios from 'axios';
import { json } from 'react-router-dom';


export default function Signin(req,res) {
  const [data,setData] = useState({email:null,password:null});
  const router = useRouter()
  const dispatch = useDispatch()
  const isloggedIn = useSelector((state)=>({
    'loggedIn': state.auth?.isLoggedIn,
    'role':state.auth?.user
  }));
  useEffect(()=>{
    if(isloggedIn.loggedIn){
        router.push(`/auth/signout`);
    }
  },[isloggedIn.loggedIn])
  const submit = (e)=>{
    e.preventDefault();
    if(data.email && data.password) {
        postData(`/api/login`,data)
        .then(res=>res.text())
        .then(dat=>{
          console.log(JSON.parse(dat))
          // if(dat.status===200){
          //   alert(dat.message)
          //   dispatch(loginUser(dat.resData))
          // }
        })
        .catch((err)=>console.log(err))
    }else{
      alert('Please fill credentials')
    }
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" onChange={(e)=>setData({...data,email:e.target.value})} id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" onChange={(e)=>setData({...data,password:e.target.value})} id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                      Remember Me
                    </label>
                  </div>
                  <div className="d-grid">
                    <button onClick={submit} className={`${styles.btnLogin} btn btn-primary text-uppercase fw-bold`} type="submit">Sign
                      in</button>
                  </div>
                  <hr className="my-4" />
                  <div className="text-center">
                    <p>Not a member? <a href="/auth/signup">Register</a></p>
                  </div>
                </form> 
              </div>
            </div>
          </div>
          <div>
            <p>username:user@cl.me</p>
            <p>password:1234</p>
          </div>
        </div>
      </div>
    </>
  )
}
