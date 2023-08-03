"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import style from "../scss/signin.module.scss"
import { useRouter } from "next/navigation";

const SignInPage = () => {


  const router=useRouter()
  const handleSignIn=()=>{
    signIn("google")
    router.push("/")
  }


  return (
    <div className={style.account_container}>
      <div>
        <button onClick={handleSignIn} className={style.signIn_google}>
        <FcGoogle />
          <h3>Sign In Google</h3>
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
