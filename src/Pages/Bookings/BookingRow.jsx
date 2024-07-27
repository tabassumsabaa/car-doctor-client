import { RxCrossCircled } from "react-icons/rx";


const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {
    const {_id, date, service, price, img, status}= booking;    
    

    return (
        <div className="my-6">
            <tr>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm bg-[#ff3811] text-white text-2xl"><RxCrossCircled></RxCrossCircled></button>
        </th>
        <td>          
            <div className="avatar">
              <div className="rounded h-24 w-24">
                {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>                     
        </td>
        <td>{service}</td>
        <td>{date}</td>
        <td>$ {price}</td>
        <th>
          {   
             status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
             <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
          }       
        </th>
      </tr>
        </div>
    );
};

export default BookingRow;