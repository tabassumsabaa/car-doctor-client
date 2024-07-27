import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";


const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `https://car-doctor-server-xi-three.vercel.app/bookings?email=${user?.email}`;

    useEffect(()=>{
      axios.get(url, {withCredentials: true})
      .then(res => {
        setBookings(res.data);
      })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
       }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
         }
       });
        if (proceed) {
         fetch(`https://car-doctor-server-xi-three.vercel.app/bookings/${id}`, {
             method: 'DELETE'
         })
         .then(res => res.json())
         .then(data =>{
             console.log(data);
             if (data.deletedCount > 0) {
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
             }
         })
        }
     }

     const handleBookingConfirm = id => {
        Swal.fire({
            title: "Confirmed!",
            text: "Are You Sure to confirm?",
            icon: "success"
          });
        fetch(`https://car-doctor-server-xi-three.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0) {
                //updated state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);        
            }
        })
     }

    return (
        <div>
            <h2 className="text-5xl text-center my-10">Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
            <label><input type="checkbox" className="checkbox" /></label>
        </th>
        <th>photo</th>
        <th>services</th>
        <th>date</th>
        <th>price</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking => <BookingRow
           key={booking._id}
           booking={booking}
           handleDelete={handleDelete}
           handleBookingConfirm={handleBookingConfirm}
        ></BookingRow>)
      }          
    </tbody>
    </table>
</div>

        </div>
    );
};

export default Bookings;