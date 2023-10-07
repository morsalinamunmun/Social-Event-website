import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="card flex-shrink-0 w-full max-w-sm my-10 shadow-2xl flex mx-auto bg-base-100">
                <h2 className="p-5 text-2xl font-bold">Register Now</h2>
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="email" placeholder="User Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-500 text-white">Register</button>
        </div>
        <p className="mt-2">Already have an account? <Link className="text-blue-500 underline ml-2" to='/login'>Login</Link></p>
      </form>
    </div>
        </div>
    );
};

export default Register;