import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/assets/images/login/login.svg";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";



const Login = () => {

  const {singIn} = useAuth();

  // const {singIn}= useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();
  console.log(location);

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;    
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    singIn(email, password)
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const user = {email};
      //Navigate(location?.state ? location?.state : '/')
      //get access token
    axios.post('https://car-doctor-server-xi-three.vercel.app/jwt', user, {withCredentials: true})
      .then(res =>{
        console.log(res.data);
        if (res.data.success) {
          Navigate(location?.state ? location?.state : '/')
        }
      })
    })
    .catch(error => console.log(error));

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
       <h1 className="text-3xl font-bold text-center text-[#FF3811]">Login</h1>
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        <div className="text-center my-4">
           <p>New Here Please <Link to="/singup" className="text-[#FF3811] font-semibold">SING UP</Link></p>
        </div>
      </div>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Login;