import Link from "next/link";

export function RecentBlogItem({ title, url, date, imgSrc, author, comments }) {
  return (
    <div className="block-21 mb-4 d-flex">
      <Link
        href={url}
        className="blog-img mr-4"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></Link>
      <div className="text">
        <h3 className="heading">
          <a href={url}>{title}</a>
        </h3>
        <div className="meta">
          <div>
            <Link href={url}>
              <span className="icon-calendar"></span> {date}
            </Link>
          </div>
          <div>
            <Link href={url}>
              <span className="icon-person"></span> {author}
            </Link>
          </div>
          <div>
            <Link href={url}>
              <span className="icon-chat"></span> {comments}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
