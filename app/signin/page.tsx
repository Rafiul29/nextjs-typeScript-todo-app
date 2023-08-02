"use client"
import {FcGoogle} from "react-icons/fc"
import { useSession, signIn, signOut } from "next-auth/react"

const SignInPage = () => {
  return (
    <div>
      <button >
        <FcGoogle/>
        <h3>SignIn Google</h3>
      </button>
    </div>
  );
};

export default SignInPage;
