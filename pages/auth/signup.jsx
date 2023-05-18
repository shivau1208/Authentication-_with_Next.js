import { postData } from '../../lib/request'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Home.module.scss'



export default function Signup() {
  const route = useRouter()
  const [data,setData] = useState({email:null,fname:null,lname:null,password:null})

  const register = (e)=>{
    e.preventDefault()
    var confirmpassword = document.getElementById('cnfmpwd').value
    if(data.password===confirmpassword){
      postData('/api/sign_up',data).then(dat=>{
        if(dat.status === 'success') route.push('/auth/signin')
      })
    }else{
      console.log('Passwords does not match!!')
    }
  }
  return (
    <>
      <div className="container" id="pills-register" role="tabpanel" >
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
                <form>
                  {/* <!-- Name input --> */}
                  <div className='d-flex'>
                    <div className="form-floating mb-3 me-1">
                      <input type="text" onChange={(e)=>setData({...data,fname:e.target.value})} className="form-control" placeholder="Name" />
                      <label htmlFor="Name">First Name</label>
                    </div>
                    <div className="form-floating mb-3 ms-1">
                      <input type="text" onChange={(e)=>setData({...data,lname:e.target.value})} className="form-control" placeholder="Name" />
                      <label htmlFor="Name">Last Name</label>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}
                  {/* <div className="form-floating mb-3">
                    <input type="text" onChange={(e)=>setData({...data,email:e.target.value})} className="form-control" placeholder="Email" />
                    <label htmlFor="Email">Email</label>
                  </div> */}
                  <div className="input-group  mb-3" style={{'height':'59px'}}>
                    <div className="form-floating">
                      <input type="text" onChange={(e)=>setData({...data,email:(e.target.value+"@cl.me")})} className="form-control" placeholder="Email"  />
                      <label htmlFor="Email">Email</label>
                    </div>
                      <span className="input-group-text">@cl.me</span>
                  </div>


                  {/* <!-- Password input --> */}
                  <div className="form-floating mb-3">
                    <input type="password" onChange={(e)=>setData({...data,password:e.target.value})} className="form-control" placeholder="Password" />
                    <label htmlFor="Password">Password</label>
                  </div>


                  {/* <!-- Repeat Password input --> */}
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id='cnfmpwd' placeholder="Confirm Password" />
                    <label htmlFor="Password">Confirm Password</label>
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-2">
                    <input className="form-check-input me-2" type="checkbox" value="" 
                      aria-describedby="registerCheckHelpText" />
                    <label className="form-check-label" htmlFor="registerCheck">
                      I have read and agree to the terms
                    </label>
                  </div>

                  {/* <!-- Submit button --> */}
                  <div className='d-grid'>
                    <button type="submit" onClick={register} className={`${styles.btnLogin} btn btn-primary text-uppercase fw-bold`}>Sign Up</button>
                  </div>
                  <hr />
                  <div className="text-center">
                    <p>Already member? <a href="/auth/signin">Log In</a></p>
                  </div>
                </form> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
