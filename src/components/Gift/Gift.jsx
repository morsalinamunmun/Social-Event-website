import { Link } from 'react-router-dom';
import decoration from '../../assets/Decoration.jpg'
const Gift = () => {
    return (
        <div className="hero max-w-6xl mx-auto py-10">
        <div className="hero-content flex-col lg:flex-row mx-20">
          <img src={decoration} className="max-w-sm rounded-lg shadow-2xl" />
          <div className='bg-gray-100 p-10'>
            <h1 className="text-3xl font-bold">Social events design template</h1>
            <p className="py-6">Event decoration design involves planning and creating the visual aesthetics and ambiance for various types of events, such as weddings, parties, corporate functions, and more. Here's an explanation of the key aspects of event decoration design:</p>
            <button className="bg-pink-500 text-white  p-2"><Link to='/gallery'>Show Design gallery</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Gift;