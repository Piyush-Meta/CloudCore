import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../Services/authServices";
import {useNavigate} from "react-router-dom";
import { Mail, Lock, Eye, ShieldCheck } from "lucide-react";
const AuthForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = isLogin
      ? await loginUser(formData)
      : await signupUser(formData);

    if (response.success) {
      navigate("/");
    }
  } catch (error) {
    console.error(error);
  }
};
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
     termsAccepted: false,
  });
  const [isLogin, setIsLogin] = useState(true);
  const toggleSign = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="rounded-2xl border border-gray-400 bg-white p-10 shadow-2xl my-15">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 text-center ">
        {isLogin ? "Welcome Back" : "Create Account"}
      </h2>
      <p className="mt-1 text-gray-500 text-center">
        {isLogin
          ? "Sign in to manage your servers and services."
          : "Create your CloudCore account."}
      </p>
      {/* Form */}
      <form className="mt-5 space-y-6"
      onSubmit ={handleSubmit}
      >
        {/* Name */}
        {!isLogin && (
          <div>
            <label className="mb-2 block font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-400 p-2 w-full rounded border-2"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
        )}
        {/* Email */}
        <div>
          <label className="mb-1 block font-medium">Email address</label>
          <label className="input input-bordered flex items-center gap-3 border border-gray-400 rounded border-2">
            <Mail size={18} className="text-gray-400 m-3" />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        {/* Password */}
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="font-medium">Password</label>
            {isLogin && (
              <Link
                to="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            )}
          </div>

          <label className="input input-bordered flex  justify-between items-center gap-3 border border-gray-400 rounded">
            <Lock size={18} className="text-gray-400 m-3" />

            <input
              type="password"
              name="password"
              
              value={formData.password}
              onChange={handleChange}
            />

            <Eye size={18} className="cursor-pointer text-gray-400 m-4" />
          </label>
        </div>
        {/* Confirm Password */}
        {!isLogin && (
          <div>
            <label className="mb-2 block font-medium">Confirm Password</label>
            <label className="input input-bordered  flex items-center gap-3 border border-gray-400 rounded">
              <Lock size={18} className="text-gray-400 m-3" />

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <Eye size={18} className="cursor-pointer text-gray-400 m-4" />
            </label>
          </div>
        )}

        {/* Remember */}
        {isLogin ? (
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span className="text-sm text-black">Remember this device</span>
          </label>
        ) : (
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <span className="text-sm text-black">
              I agree to Terms & Conditions
            </span>
          </label>
        )}

        {/* Button */}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-4 text-white shadow-lg transition hover:bg-blue-700"
        >
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck size={18} />
            <span className="font-semibold tracking-wide">
              {isLogin ? "SIGN IN SECURELY" : "CREATE ACCOUNT"}
            </span>
          </div>
        </button>
      </form>

      {/* Divider */}

      <div className="my-8 flex items-center">
        <div className="h-px flex-1 bg-gray-300"></div>

        <span className="mx-4 text-xs font-medium uppercase text-gray-400">
          OR CONTINUE WITH
        </span>

        <div className="h-px flex-1 bg-gray-300"></div>
      </div>
      {/* Google */}
      <button
        type="button"
        className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />

        <span>Continue with Google</span>
      </button>

      {/* Security Card */}

      <div className="mt-8 rounded-xl border border-gray-200 p-5">
        <div className="flex gap-4 justify-between">
          <h2 className="text-m font-semibold text-gray-500">
            {isLogin ? "New to CloudeCorePro?" : "Already have an account?"}
          </h2>
          <button
            type="button"
            onClick={toggleSign}
            className="font-semibold text-blue-600 hover:underline"
          >
            {isLogin ? "Register Now" : "Sign In"}
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-10 flex justify-center gap-8 text-sm text-gray-500">
        <Link to="#" className="hover:text-blue-600">
          Contact Support
        </Link>
        <Link to="#" className="hover:text-blue-600">
          Visit Help Center
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
