import Link from 'next/link';

export default function Header() {
  return (
  	<header>
  		<div className="container">
        <Link href="/">
          <a><img src="/img/logo.svg" alt="IDOT logo" /></a>
        </Link>
        <Nav />
  		</div>
    </header>
  );
};

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/for-students"><a>For Students</a></Link>
        </li>
        <li>
          <Link href="/programs"><a>Programs</a></Link>
        </li>
        <li>
          <Link href="/partner-with-us"><a>Partner with Us</a></Link>
        </li>
        <li>
          <Link href="/get-involved"><a>Get Involved</a></Link>
        </li>
      </ul>
    </nav>
  );
}
