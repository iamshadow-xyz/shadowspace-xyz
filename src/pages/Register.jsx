import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignUp signInUrl="/login" />
    </div>
  );
};

export default Register;
