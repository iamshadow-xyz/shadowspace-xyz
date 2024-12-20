import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <SignIn signUpUrl="/register" />
    </div>
  );
};

export default Login;
