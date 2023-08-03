"use client";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";
import style from "../scss/signin.module.scss"

const SignInPage = () => {
  return (
    <div className={style.account_container}>
      <div>
        <button onClick={() => signIn("google")} className={style.signIn_google}>
          <FcGoogle />
          <h3>SignIn Google</h3>
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
