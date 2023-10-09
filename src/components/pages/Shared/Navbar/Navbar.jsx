import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const links = <>
        <li><NavLink to='/' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-pink-500 underline" : ""}>Home</NavLink></li>
        <li><NavLink to='/about' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-pink-500 underline" : ""}>About Us</NavLink></li>
        <li><NavLink to='/services' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-pink-500 underline" : ""}>Services</NavLink></li>
        <li><NavLink to='/profile' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-pink-500 underline" : ""}>Profile</NavLink></li>
    </>
    const handleLogOut = ()=>{
        logOut()
        .then(()=> console.log('logout'))
        .catch(error=> console.error(error))
    }
    return (
        <div className="bg-[#FBCFE850]">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="flex-row gap-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                <a className="normal-case text-xl greatVibes font-semibold">Social Events</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <>
                          <a onClick={handleLogOut} className="py-2 px-3 text-white font-semibold rounded bg-pink-500 cursor-pointer">Log Out</a>
                        </> : <Link to='/login' className=" cursor-pointer py-2 px-3 text-white font-semibold rounded bg-pink-500">Login</Link>
                    }
                 </div>
            </div>
        </div>
    );
};

export default Navbar;