import Link from "next/link";
import socialLinksData from "../../utils/socialLinksData";

function SocialLinks() {
  return (
    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
      {socialLinksData.map((link) => (
        <li key={link.id} className="ftco-animate">
          <Link href={link.href}>
            <span className={link.icon}></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
