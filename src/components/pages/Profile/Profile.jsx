import userImage from '../../../assets/user.png'
import Navbar from '../Shared/Navbar/Navbar';
const Profile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto'>
            <div className='md:col-span-2 lg:col-span-3'></div>
            <div className='border-2 text-center mt-5'>
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