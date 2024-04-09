import Link from "next/link";

export function NavLinks({ links, navbarStyle }) {
  const linkClass = navbarStyle ? "nav-item" : "";

  return (
    <ul className={navbarStyle ? "navbar-nav ml-auto" : "list-unstyled"}>
      {links.map((link, index) => (
        <li className={linkClass} key={index}>
          <Link href={link.href} className={navbarStyle ? "nav-link" : ""}>
            {navbarStyle ? (
              link.text
            ) : (
              <>
                <span className="ion-ios-arrow-round-forward mr-2"></span>
                {link.text}
              </>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
