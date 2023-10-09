
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/kQfvSZs/floral13-1.jpg)'}}>
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[100%] bg-pink-200 p-5">
            <h1 className="mb-5 text-4xl font-bold text-black">Social Event</h1>
            <p className="mb-5 text-black">you can use our online event websites, local event listings, or social media platforms. </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <form action="" className="">
                <input type="text" name="" id=""placeholder="Search..." className="py-2 px-3"/>
                <button className="bg-pink-500 text-white px-3 py-2 rounded-r">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Banner;