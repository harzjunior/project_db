"use client";
import { NavbarToggle } from "./NavbarToggle";
import { ContactInfo } from "./ContactInfo";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Navbar({ scrolled }) {
  const links = [
    { href: "/home", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/teacher", text: "Teacher" },
    { href: "/courses", text: "Courses" },
    { href: "/pricing", text: "Pricing" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact" },
  ];

  const navbarClass = `navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light${
    scrolled ? " scrolled" : ""
  }`;

  return (
    <>
      <ContactInfo />
      <nav
        // className={"navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light"}
        className={navbarClass}
        id="ftco-navbar"
      >
        <div className="container d-flex align-items-center">
          <Logo />
          <NavbarToggle />
          <div className="collapse navbar-collapse" id="ftco-nav">
            <NavLinks links={links} navbarStyle={true} />
          </div>
        </div>
      </nav>
    </>
  );
}
