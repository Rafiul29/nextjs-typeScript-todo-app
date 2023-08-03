"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn ,useSession } from "next-auth/react";
import style from "../scss/signin.module.scss"
import { useRouter  } from "next/navigation";
import { useEffect } from "react";

const SignInPage = () => {

  const {data:session}=useSession()

  const router=useRouter()

  const signInWithGoogle=async()=>{
        try{
       await signIn("google");
        }catch(err){
          console.log(err)
        }
  }

  useEffect(()=>{
    if(session){
     router.push("/")
    }
  },[router,session])

  if(session){
    return null
  }

  return (
    <div className={style.account_container}>
      <div>
        <button onClick={signInWithGoogle} className={style.signIn_google}>
        <FcGoogle />
          <h3>Sign In Google</h3>
        </button>
      </div>
    </div>
  );
};

export default SignInPage;

