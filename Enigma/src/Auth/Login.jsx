import AuthLayout from "./AuthLayout";
import AuthForm from "./AuthForm";

const Login = () => {
  return (
    <AuthLayout>
      <AuthForm type="login" />
    </AuthLayout>
  );
};

export default Login;