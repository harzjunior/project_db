import Link from "next/link";

export function CourseItem({ imgSrc, title, href, classTime, description }) {
  return (
    <div className="col-md-6 course d-lg-flex ftco-animate">
      <div className="img" style={{ backgroundImage: `url(${imgSrc})` }}></div>
      <div className="text bg-light p-4">
        <h3>
          <Link href={`${href}/${encodeURIComponent(title)}`}>{title}</Link>
        </h3>
        <p className="subheading">
          <span>Class time:</span> {classTime}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
