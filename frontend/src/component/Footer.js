"use client";

import { Link } from "react-scroll";
import { NavLinks } from "./NavLinks";
import RecentBlogSection from "./RecentBlogSection";
import SocialLinks from "./SocialLinks";

export function Footer() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/services", text: "Services" },
    { href: "/departments", text: "Departments" },
    { href: "/contact", text: "Contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">
                        203 Fake St. Mountain View, Abuja, Federal Capital
                        Territory, Nigeria
                      </span>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">+234 810 7060 160</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info@bytebbuddiez.com</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Recent Blog</h2>
                <RecentBlogSection isHomeBlog={true} />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <NavLinks links={links} />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2">Subscribe Us!</h2>
                <form action="#" className="subscribe-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control mb-2 text-center"
                      placeholder="Enter email address"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      className="form-control submit px-3"
                    />
                  </div>
                </form>
              </div>
              <div className="ftco-footer-widget mb-5">
                <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy;
                {currentYear} All rights reserved | This website is made with{" "}
                <i className="icon-heart" aria-hidden="true"></i> by{" "}
                <Link href="https://harunabah.tech" target="_blank">
                  ByteBuddiez
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
