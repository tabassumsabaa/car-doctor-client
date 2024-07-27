import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";
const ServiceCards = ({service}) => {
    const {_id, title, img, price } = service;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <p className="text-xl text-[#FF3811] font-semibold"> Price: ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/booking/${_id}`} className="text-[#FF3811] text-5xl font-bold"> <TbArrowNarrowRight></TbArrowNarrowRight> </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCards;