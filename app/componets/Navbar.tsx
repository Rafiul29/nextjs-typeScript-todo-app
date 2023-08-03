"use client";

import Link from "next/link";
import style from "../scss/navbar.module.scss";
import { useSession, signOut } from "next-auth/react";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
 
  const router=useRouter()

  const handleSignOut=()=>{
        signOut()
  }

  const swithHome=()=>{
    router.push("/")
  }
  return (
    <header className={style.header}>
      <nav className={style.navitem}>
        <h2 onClick={swithHome} className={style.nav_logo}>Todo App</h2>
        <div className={style.navLinks}>
          {session ? (
            <button onClick={handleSignOut} className={style.logout}>
              Logout
            </button>
          ) : (
            <Link href="/signin" className={style.signin}>
              SignIn
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
