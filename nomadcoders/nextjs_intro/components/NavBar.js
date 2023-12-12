import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()
  return (
    <nav>
      <Link href="/" passHref={true} legacyBehavior>
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about" passHref={true} legacyBehavior>
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>
        {`
          a {
            text-decoration: none;
          }
          .active {
            color: tomato;
          }
        `}
      </style>
    </nav>
  )
}
