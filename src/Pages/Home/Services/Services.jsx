import { useEffect, useState } from "react";
import ServiceCards from "./ServiceCards";
import { Link } from "react-router-dom";


const Services = () => {
    const [services, setServices] = useState([]);
        useEffect( () => {
            fetch('https://car-doctor-server-xi-three.vercel.app/Services')
               .then(res => res.json())
               .then(data => setServices(data));        
        }, [])
    return (
        <div className="mt-2">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-[#FF3811]">Services</h3>
                <h1 className="text-5xl text-slate-950 font-bold mb-5">Our Service Area</h1>
                <p className="capitalize">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service =><ServiceCards
                    key={service._id}
                    service={service}
                    ></ServiceCards>)
                }
            </div>
            <div className="text-center space-y-5 m-5">
                <Link><button className="btn btn-outline join-item text-[#FF3811]">More Services</button></Link>
            </div>
        </div>
    );
};

export default Services;