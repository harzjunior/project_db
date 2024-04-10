import Link from "next/link";
import { ActionButton } from "./ActionButton";

export default function BlogItem({
  date,
  month,
  year,
  imgSrc,
  title,
  href,
  content,
  admin,
  comments,
}) {
  return (
    <div className="col-md-6 col-lg-4 ftco-animate">
      <div className="blog-entry">
        <Link
          href={`${href}/${encodeURIComponent(title)}`}
          className="block-20 d-flex align-items-end"
          style={{ backgroundImage: `url(${imgSrc})` }}
        >
          <div className="meta-date text-center p-2">
            <span className="day">{date}</span>
            <span className="mos">{month}</span>
            <span className="yr">{year}</span>
          </div>
        </Link>
        <div className="text bg-white p-4">
          <h3 className="heading">
            <Link href={`${href}/${encodeURIComponent(title)}`}>{title}</Link>
          </h3>
          <p>{content}</p>
          <div className="d-flex align-items-center mt-4">
            <ActionButton
              href={`${href}/${encodeURIComponent(title)}`}
              label="Read More "
              blogAction={true}
              containerClass="ml-auto mb-0"
              padClass={false}
            />
            <p className="ml-auto mb-0">
              <Link
                href={`${href}/${encodeURIComponent(title)}`}
                className="mr-2"
              >
                {admin}
              </Link>
              <Link
                href={`${href}/${encodeURIComponent(title)}`}
                className="meta-chat"
              >
                <span className="icon-chat"></span> {comments}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
