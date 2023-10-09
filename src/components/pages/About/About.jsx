/* eslint-disable react/jsx-key */
import Navbar from "../Shared/Navbar/Navbar";
import owner from '../../../assets/men-1.jpg'
import { useLoaderData } from "react-router-dom";
const About = () => {
    const teams = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
            <div className="text-center py-10">
            <h2 className="text-2xl font-bold">About us</h2>
            <p>Director of social event management system</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 ">
                <div className=""><img className=" w-96 h-full" src={owner} alt="" /></div>
                <div className="w-[50%]">
                    <p>Mr. jack Jon. He is an social event director and owner. An event management director is the creative mastermind behind the successful execution of a wide range of events, from corporate conferences and weddings to music festivals and charity galas. While their primary role involves orchestrating the logistical aspects of these occasions, they also play a crucial role in shaping the identity of each event. With their keen sense of vision and attention to detail, an event management director infuses every gathering with a unique and memorable character...<span className="text-blue-500">Read more </span></p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-center py-10">Our Team</h2>
               <div className=" bg-pink-400 py-10">
                   <div className="ml-28 w-full flex gap-20">
                   {
                        teams.map(team=>

                            <div className="text-center w-20">
                                <div className="h-24 w-24"><img className="justify-center rounded-full w-full h-full" src={team.img} alt="" /></div>
                                <div className="">
                                    <h3 className="font-semibold">{team.name}</h3>
                                    <p>{team.title}</p>
                                </div>
                            </div>
                        
                            )
                    }
                   </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;