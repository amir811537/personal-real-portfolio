import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import StarryBackground from "./StarryBackground";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
  
  

    // React Hook Form setup
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Hardcoded credentials
    const data = {
        email: "amirhossain2002@gmail.com",
        password: "amir2002",
        userName: "amir811537"
    };

    // Login function
    const handleLogin = (formData) => {
        const { email, password } = formData;

        if (email !== data.email && email !== data.userName) {
            alert("Email or Username does not match!");
            return;
        }

        if (password !== data.password) {
            alert("Password is incorrect!");
            return;
        }

        // Redirect to admin if login is successful
        navigate("/admin");
    };

    return (
        <div>
            <div className="bg-black">
                <div className="sticky top-0 z-[999]">
                    <div className="flex items-center h-screen w-full">
                        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                            <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>
                            
                            {/* Form with react-hook-form */}
                            <form onSubmit={handleSubmit(handleLogin)} className="mb-4">
                                {/* Email/Username Field */}
                                <div className="mb-4 md:w-full">
                                    <label htmlFor="email" className="block text-xs mb-1">Username or Email</label>
                                    <input 
                                        className="w-full border rounded p-2 outline-none focus:shadow-outline" 
                                        type="text"
                                        id="email"
                                        placeholder="Username or Email"
                                        {...register("email", { required: "Username or Email is required" })}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                                </div>

                                {/* Password Field */}
                                <div className="mb-6 md:w-full relative">
                                    <label htmlFor="password" className="block text-xs mb-1">Password</label>
                                    <div className="relative">
                                        <input 
                                            className="w-full border rounded p-2 outline-none focus:shadow-outline pr-10"
                                            type={showPassword ? "text" : "password"} 
                                            id="password"
                                            placeholder="Password"
                                            {...register("password", { required: "Password is required" })}
                                        />
                                        <span 
                                            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                            onClick={() => setShowPassword(prev => !prev)}
                                        >
                                            {showPassword ? <IoIosEyeOff /> : <FaEye />}
                                        </span>
                                    </div>
                                    {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
                                >
                                    Login
                                </button>
                    
                            </form>

                            {/* Forgot Password Link */}
                            <a className="text-blue-700 text-center text-sm" href="">Forgot password?</a>
                        </div>
                    </div>
                </div>
                <div className="z-[-999]">
                    <StarryBackground />
                </div>
            </div>
        </div>
    );
};

export default Login;
