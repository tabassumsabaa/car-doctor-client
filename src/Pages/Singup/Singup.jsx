import { Link } from "react-router-dom";
import login from "../../assets/assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Singup = () => {

    const {createUser} = useContext(AuthContext);

    const handleSingup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
              <div className="hero min-h-screen mb-6">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-12">      
       <img src={login} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <h1 className="text-3xl font-bold text-center text-[#FF3811]">Sing Up</h1>
        <form onSubmit={handleSingup}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>    
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sing up</button>
        </div>
        </form>
        <div className="text-center my-4">
           <p>Already Have An Account? <Link to="/login" className="text-[#FF3811] font-bold">Log IN </Link> Here</p>
        </div>
      </div>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Singup;