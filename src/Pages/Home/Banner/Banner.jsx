import img1 from "../../../assets/assets/images/banner/1.jpg"
import img2 from "../../../assets/assets/images/banner/2.jpg"
import img3 from "../../../assets/assets/images/banner/3.jpg"
import img4 from "../../../assets/assets/images/banner/4.jpg"
import img5 from "../../../assets/assets/images/banner/5.jpg"
import img6 from "../../../assets/assets/images/banner/6.jpg"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className="text-slate-100 space-y-7 pl-12 w-1/2">
         <h2 className="text-6xl font-semiboldbold">Affordable Price For Car Servicing</h2>
         <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
            <button className="btn btn-active text-white bg-[#FF3811] mr-5">Discover More</button>
            <button className="btn btn-outline bg-transparent hover: text-[#FF3811]  ">Latest Project</button>
         </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end ">
      <a href="#slide6" className="btn btn-circle bg-[#FF3811] text-white text-2xl mr-5"><GoArrowLeft></GoArrowLeft></a>
      <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white text-2xl"><GoArrowRight></GoArrowRight></a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2}  className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className="text-slate-100 space-y-7 pl-12 w-1/2">
         <h2 className="text-6xl font-semiboldbold">Affordable Price For Car Servicing</h2>
         <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
            <button className="btn btn-active text-white bg-[#FF3811] mr-5">Discover More</button>
            <button className="btn btn-outline bg-transparent hover: text-[#FF3811]">Latest Project</button>
         </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0  flex -translate-y-1/2 transform justify-end">
      <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-white text-2xl mr-5"><GoArrowLeft></GoArrowLeft></a>
      <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-white text-2xl"><GoArrowRight></GoArrowRight></a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className="text-slate-100 space-y-7 pl-12 w-1/2">
         <h2 className="text-6xl font-semiboldbold">Affordable Price For Car Servicing</h2>
         <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
            <button className="btn btn-active  text-white bg-[#FF3811] mr-5">Discover More</button>
            <button className="btn btn-outline bg-transparent hover: text-[#FF3811]">Latest Project</button>
         </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0  flex -translate-y-1/2 transform justify-end">
      <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-white text-2xl mr-5"><GoArrowLeft></GoArrowLeft></a>
      <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-white text-2xl"><GoArrowRight></GoArrowRight></a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4}  className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className="text-slate-100 space-y-7 pl-12 w-1/2">
         <h2 className="text-6xl font-semiboldbold">Affordable Price For Car Servicing</h2>
         <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
            <button className="btn btn-active text-white bg-[#FF3811] mr-5">Discover More</button>
            <button className="btn btn-outline bg-transparent hover: text-[#FF3811]">Latest Project</button>
         </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0  flex -translate-y-1/2 transform justify-end">
      <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-white text-2xl mr-5"><GoArrowLeft></GoArrowLeft></a>
      <a href="#slide5" className="btn btn-circle bg-[#FF3811] text-white text-2xl"><GoArrowRight></GoArrowRight></a>
    </div>
  </div>

  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className="text-slate-100 space-y-7 pl-12 w-1/2">
         <h2 className="text-6xl font-semiboldbold">Affordable Price For Car Servicing</h2>
         <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
            <button className="btn btn-active text-white bg-[#FF3811] mr-5">Discover More</button>
            <button className="btn btn-outline bg-transparent hover: text-[#FF3811]">Latest Project</button>
         </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0  flex -translate-y-1/2 transform justify-end">
      <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-white text-2xl mr-5"><GoArrowLeft></GoArrowLeft></a>
      <a href="#slide6" className="btn btn-circle bg-[#FF3811] text-white text-2xl"><GoArrowRight></GoArrowRight></a>
    </div>
  </div>

  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <div className="text-slate-100 space-y-7 pl-12 w-1/2">
         <h2 className="text-6xl font-semiboldbold">Affordable Price For Car Servicing</h2>
         <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
         <div>
            <button className="btn btn-active text-white bg-[#FF3811] mr-5">Discover More</button>
            <button className="btn btn-outline bg-transparent hover: text-[#FF3811]">Latest Project</button>
         </div>
      </div>
    </div>
    <div className="absolute left-5 right-5 bottom-0  flex -translate-y-1/2 transform justify-end">
      <a href="#slide5" className="btn btn-circle bg-[#FF3811] text-white text-2xl mr-5"><GoArrowLeft></GoArrowLeft></a>
      <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-white text-2xl"><GoArrowRight></GoArrowRight></a>
    </div>
  </div>

</div>
        </div>
    );
};

export default Banner;