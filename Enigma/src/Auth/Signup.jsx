import AuthLayout from "./AuthLayout";
import AuthForm from "./AuthForm";

const Signup = () => {
  return (
    <AuthLayout>
      <AuthForm type="signup" />
    </AuthLayout>
  );
};

export default Signup;