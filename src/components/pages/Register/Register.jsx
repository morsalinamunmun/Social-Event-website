import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
//import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const {createUser} = useContext(AuthContext);
  const handleRegister = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, email, password)
    if(password.length < 6){
      setError('Password should be at least 6 characters or longer');
      return;
  }else if(!/[A-Z]/.test(password)){
      setError('Password should have at least one uppercase characters.')
      return;
  }
  setError(' ');
    createUser(email, password)
    .then(result=>{
      console.log(result.user);
      setSuccess('Register has been successfully')
       navigate(location?.state? location.state: '/login')
    })
    .catch(error=> console.error(error));
  }
  return (
      <div>
            <Navbar></Navbar>
            
             {/* <> {
                success && <p className="text-blue-500 ">{success}</p>
              }</> */}
            <div className="card flex-shrink-0 w-full max-w-sm my-10 shadow-2xl flex mx-auto bg-base-100">
                <h2 className="p-5 text-2xl font-bold">Register Now</h2>
              <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                              <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="User Name" className="input input-bordered" required />
                    </div>
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
                        {
                            error && <p className="text-red-500">{error}</p>
                        }
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-pink-500 text-white">Register</button>
                    </div>
                    <p className="mt-2">Already have an account? <Link className="text-blue-500 underline ml-2" to='/login'>Login</Link></p>
                </form>
                <> {
                success && <p className="text-blue-500 ">{success}</p>
              }</>
            </div>
            {/* <ToastContainer></ToastContainer> */}
      </div>
    );
};

export default Register;