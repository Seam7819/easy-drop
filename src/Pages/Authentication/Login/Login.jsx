import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router"; 
import SocialLogIn from "../SocialLogIn/SocialLogIn";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); // ✅ for navigation

    const onSubmit = (data) => {
        console.log(data);

        // After successful login, navigate to home
        // Here you would normally check login API response first
        navigate("/");
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">LogIn With Easy Drop</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input 
                        type="email" 
                        {...register("email", { required: true })} 
                        className="input" 
                        placeholder="Email" 
                    />
                    {errors.email?.type === 'required' && <p className="text-red-500">Email is required</p>}

                    <label className="label">Password</label>
                    <input 
                        type="password" 
                        {...register("password", { required: true, minLength: 6, pattern: /^[A-Za-z]+$/i })} 
                        className="input" 
                        placeholder="Password" 
                    />
                    {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                    {errors.password?.type === "minLength" && (
                        <p className="text-red-500">Password should be 6 characters or longer</p>
                    )}
                    {errors.password?.type === 'pattern' && <p className="text-red-500">
                        Password must only contain letters (A–Z, a–z)
                    </p>}

                    <div><a className="link link-hover">Forgot password?</a></div>
                </fieldset>

                <button className="btn w-full md:w-1/2 btn-accent mt-4">Login</button>
            </form>

            <p className="text-sm">
                Don't Have Any Account? <Link className="text-red-500" to="/register">Register</Link>
            </p>
            <p className="w-full md:w-1/2 text-center my-2">Or</p>
            <SocialLogIn />
        </div>
    );
};

export default Login;
