export function SocialMediaIcons() {
  const socialMediaLinks = [
    { icon: "icon-twitter", href: "#" },
    { icon: "icon-facebook", href: "#" },
    { icon: "icon-google-plus", href: "#" },
    { icon: "icon-instagram", href: "#" },
  ];

  return (
    <ul className="ftco-social text-center">
      {socialMediaLinks.map((link, index) => (
        <li className="ftco-animate" key={index}>
          <a href={link.href}>
            <span className={link.icon}></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
