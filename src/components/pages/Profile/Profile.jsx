import userImage from '../../../assets/user.png'
import Navbar from '../Shared/Navbar/Navbar';
const Profile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-3 lg:grid-cols-4  max-w-6xl mx-auto gap-10 py-20 pr-5'>
            <div className='md:col-span-2 lg:col-span-3'>
                <form className='mx-20'>
                    <input className='w-full  px-5 py-3 border-solid border-2  border-pink-500 rounded-xl' type="number" name="number" placeholder='Phone No' id="" />
                    <br />
                    <input className='w-full my-5 px-5 py-3 border-solid border-2 border-pink-500 rounded-xl' type="text" name="text" placeholder='Location' id="" />
                    <br />
                    <input className='w-full my-5 px-5 py-3 border-solid border-2 border-pink-500 rounded-xl' type="date" name="text" placeholder='function Date' id="" />
                    <br />
                    <button className='btn w-full bg-pink-500 text-white normal-case text-xl'>Order confirm</button>
                </form>
            </div>
            <div className='border-2 text-center ml-5'>
                <img className='w-20 flex mx-auto' src={userImage} alt="User Image" />
                <h2 className='text-xl font-semibold'>User Name</h2>
                <p className='font-semibold mt-10'>Select Category</p>
                <li>Waddings</li>
            </div>
            </div>
        </div>
    );
};

export default Profile;