import Link from "next/link";

export const contactPageData = [
  {
    title: "Address",
    content: "198 West 21th Street, Suite 721 Abuja F.C.T 90001",
  },
  {
    title: "Contact Number",
    content: <Link href="tel://1234567920">+234 810 7060 160</Link>,
  },
  {
    title: "Email Address",
    content: <Link href="mailto:info@yoursite.com">info@bytebuddiez.com</Link>,
  },
  {
    title: "Website",
    content: <Link href="bytebuddiez.com">bytebuddiez.com</Link>,
  },
];
