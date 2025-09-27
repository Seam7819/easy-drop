import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router"; 
import useAuth from "../../../hooks/useAuth";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import Swal from "sweetalert2";

const Register = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const { createUser } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then((result) => {
            console.log(result.user);

            // ✅ SweetAlert2 Success Modal
            Swal.fire({
                title: "Account Created!",
                text: "Your account has been created successfully.",
                icon: "success",
                confirmButtonText: "Go To Home",
                confirmButtonColor: "#3085d6",
            }).then(() => {
                navigate("/"); // ✅ Navigate after success
            });
        })
        .catch((error) => {
            console.error(error);

            // ❌ SweetAlert2 Error Modal
            Swal.fire({
                title: "Error!",
                text: error.message || "Something went wrong. Please try again.",
                icon: "error",
                confirmButtonColor: "#d33",
            });
        });
    };

    return (
        <div className="bg-base-200">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="flex-col">
                        <div className="my-5">
                            <h1 className="text-4xl font-bold">Create an Account</h1>
                        </div>
                        <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input {...register("name", { required: true })} type="text" className="input" placeholder="Name" />
                                    {errors.name && <p className="text-red-500">Name is required</p>}

                                    <label className="label">Email</label>
                                    <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />
                                    {errors.email && <p className="text-red-500">Email is required</p>}

                                    <label className="label">Password</label>
                                    <input {...register("password", { required: true, minLength: 6, pattern: /^[A-Za-z]+$/i })} type="password" className="input" placeholder="Password" />
                                    {errors.password?.type === "required" && <p className="text-red-500">Password is required</p>}
                                    {errors.password?.type === "minLength" && <p className="text-red-500">Password should be 6 characters or longer</p>}
                                    {errors.password?.type === "pattern" && <p className="text-red-500">Password must only contain letters (A–Z, a–z)</p>}

                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                                <p>
                                    Already have an account?{" "}
                                    <Link className="text-red-500" to="/login">LogIn</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <p className="w-full md:w-1/2 text-center my-2">Or</p>
            <SocialLogIn />
        </div>
    );
};

export default Register;
