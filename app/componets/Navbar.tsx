import Link from 'next/link'
import style from '../scss/navbar.module.scss'

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={style.navitem}>
       <h2 className={style.nav_logo}>
       Todo App
       </h2>
       <div className={style.navLinks}>
        <Link href="/signin" className={style.signin}>SignIn</Link>
        <Link href="/" className={style.logout}>Logout</Link>
       </div>
      </nav>
    </header>
  )
}

export default Navbar