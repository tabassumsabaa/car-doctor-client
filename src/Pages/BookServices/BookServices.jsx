import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2';

const BookServices = () => {
    const service = useLoaderData();
    const {title, _id, price, img} = service;
    const {user} = useContext(AuthContext);

    const handleBookServices = e =>{
        e.preventDefault();
        const form = e.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const date = form.date.value;
        const email = user?.email;
        const url = form.url.value;
        const booking = {
            CustomarName: firstname, email, date, img,
            service: title,
            Service_id: _id,
            price: price
        }

        console.log(booking);

        fetch('https://car-doctor-server-xi-three.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Do you want to save the changes?",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Save",
                    denyButtonText: `Don't save`
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire("Saved!", "", "success");
                    } else if (result.isDenied) {
                      Swal.fire("Changes are not saved", "", "info");
                    }
                  });
            }
        })

    }
    return (
        <div>
            <h2 className="text-center text-3xl"> Booking service: {title}</h2>
            <form onSubmit={handleBookServices} className="card-body bg-slate-200 my-10 rounded">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="First name" name="firstname" defaultValue={user?.displayName} placeholder="First Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="Last Name" name="lastname" placeholder="Last Name" className="input input-bordered" required />          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Photo</span>
          </label>
          <input type="url" name="url" placeholder="Your Photo" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="Email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />          
        </div>      

        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input type="text" defaultValue={'$'+ price} className="input input-bordered" required />          
        </div> 
        </div>       

        <div className="form-control mt-6">          
          <input className="btn btn-block bg-[#FF3811] text-white" type="submit" value="Order Confirm" />
        </div>
        
      </form>
        </div>
    );
};

export default BookServices;