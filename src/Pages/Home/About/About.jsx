import person from "../../../assets/assets/images/about_us/person.jpg";
import parts from "../../../assets/assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen space-y-6">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
        <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
    </div>
    
    <div className="lg:w-1/2">
      <h3 className="text-3xl text-[#FF3811] font-bold">About Us!</h3>
      <h1 className="text-5xl font-bold text-[#151515]">We are qualified <br /> & of experience <br />in this field</h1>
      <p className="py-6">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <p className="mb-6">
      the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn btn-primary text-white bg-[#FF3811]">Get More Info..</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;