import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
// import AuthContext from '../../../Providers/AuthProviders'
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [loginError, setLoginError] = useState('');
    const {user, signIn} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setLoginError(' ');
        
        signIn(email, password)
        .then(result=>{
          console.log(result.user);
          //navigate after login
          //navigate(location?.state? location.state: '/')
          if(result.user.emailVerified){
             toast('Login has been successfully')
          }
        })
        .catch(error=>{
          console.error(error);
          setLoginError('Invalid email or password')
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="card flex-shrink-0 w-full max-w-sm my-10 shadow-2xl flex mx-auto bg-base-100">
                <h2 className="p-5 text-2xl font-bold">Login Now</h2>
      <form className="card-body" onSubmit={handleLogin}>
        {
          loginError && <p className="text-red-500">{loginError}</p>
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-500 text-white">Login</button>
        </div>
        <p className="mt-2">Do not have an account? <Link className="text-blue-500 underline ml-2" to='/register'>Register</Link></p>
      </form>
    </div>
    <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
