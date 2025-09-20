import { useForm } from "react-hook-form";
import { Link } from "react-router";

const Register = () => {

    const { register, handleSubmit, formState:{errors} } = useForm()

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" bg-base-200">
                    <div className=" flex-col">
                        <div className="my-5 ">
                            <h1 className="text-4xl font-bold">Create an Account</h1>
                        </div>
                        <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">

                                    <label className="label">Name</label>
                                    <input {...register("name", { required: true })} type="name" className="input" placeholder="name" />
                                    {errors.name?.type === 'required' && <p className="text-red-500">Name is required</p>}

                                    <label className="label">Email</label>
                                    <input {...register("email", { required: true })} type="email" className="input" placeholder="Email" />
                                    {errors.email?.type === 'required' && <p className="text-red-500">Email is required</p>}

                                    <label className="label">Password</label>
                                    <input {...register("password", { required: true, minLength: 6, pattern: /^[A-Za-z]+$/i })} type="password" className="input" placeholder="Password" />
                                    {errors.password?.type === 'required' && <p className="text-red-500">
                                        Password is required</p>}
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-500">Password should be  6 characters or longer</p>
                                    )}
                                    {errors.password?.type === 'pattern' && <p className="text-red-500">
                                        Password must only contain letters (A–Z, a–z)
                                    </p>}


                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                                <p>Already have an account? <Link className="text-red-500" to="/login">LogIn</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;