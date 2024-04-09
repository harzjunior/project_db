import Link from "next/link";

export default function FooterGalleryItem({ href, imgSrc }) {
  return (
    <div className="col-md-3 ftco-animate">
      <Link
        href={href}
        className="gallery image-popup img d-flex align-items-center"
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="icon mb-4 d-flex align-items-center justify-content-center">
          <span className="icon-instagram"></span>
        </div>
      </Link>
    </div>
  );
}
