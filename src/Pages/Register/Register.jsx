import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";

const Register = () => {
  const { auth, CreateUser } = useContext(AuthContext);
  //for redirect pages
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    CreateUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        // add name and photoLink to profile
        updateProfile(auth.currentUser, {
          displayName: data.name,
          photoURL: data.imageLink,
        })
          .then(() => {
            // make reload so that profile pic show
            window.location.reload();
            console.log(photoURL);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error.message);
          });

        console.log(loggedUser);
        toast.success("Login success");
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div className="md:w-1/2 mx-auto">
      <div className="card  w-full  bg-base-100">
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body">
          <h2 className="text-3xl font-bold mt-5 mb-2 text-warning">Create Account</h2>
            <div className=" grid grid-cols-1 gap-2 ">
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && <span className="text-error">{errors.name.message}</span>}
              </div>

              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                   
                  })}
                />
                {errors.email && <span className="text-error">{errors.email.message}</span>}
              </div>
              <div className="from-control">
                <label className="label" htmlFor="imageLink">
                  <span className="label-text">Image Link</span>
                </label>
                <input
                  type="text"
                  id="imageLink"
                  className="input input-bordered w-full"
                  {...register("imageLink", {
                    required: "Image link is required",
                  })}
                />
                {errors.imageLink && <span className="text-error">{errors.imageLink.message}</span>}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                  })}
                />
                {errors.password && <span className="text-error">{errors.password.message}</span>}
              </div>

              <div className="form-control">
                <label className="label" htmlFor="confirmPassword">
                  <span className="label-text">Confirm Password</span>{" "}
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-error">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn  btn-warning hover:bg-gray-600 text-white" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
        <div className="text-center mb-5">
          <p className="my-2">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 font-semibold hover:text-gray-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
