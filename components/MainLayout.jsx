import Link from "next/link";

export function MainLayout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background: coral;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          nav a {
            color: #fff;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}
