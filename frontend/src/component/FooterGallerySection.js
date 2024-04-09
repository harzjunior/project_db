import FooterGalleryItem from "./FooterGalleryItem";
import { footerGalleryData } from "../../utils/footerGalleryData";

export default function FooterGallerySection() {
  return (
    <>
      {footerGalleryData.map((item, index) => (
        <FooterGalleryItem key={index} href={item.href} imgSrc={item.imgSrc} />
      ))}
    </>
  );
}
