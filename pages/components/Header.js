import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.css';

export default function Header() {
  return (
  	<header className={styles.header}>
  		<div className={`container ${styles.headerContainer} gridPadding`}>
        <Link href="/">
          <a className={styles.logoLink}>
            <img src="/img/logo.svg" alt="IDOT logo" className={styles.logo} />
          </a>
        </Link>
        <Nav />
  		</div>
    </header>
  );
};

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/for-students">For Students</NavLink>
        </li>
        <li>
          <NavLink href="/programs">Programs</NavLink>
        </li>
        <li>
          <NavLink href="/partner-with-us">Partner with Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function NavLink({ href, children }) {
  const router = useRouter();
  const activeClass = router.pathname === href ? styles.active : null;
  return (
    <Link href={href}><a className={activeClass}>{children}</a></Link>
  );
}
