import Link from "next/link";

export function ActionButton({
  href,
  label,
  ActionClass,
  blogAction,
  containerClass,
  padClass,
  title,
}) {
  return (
    <p className={containerClass}>
      <Link
        href={`${href}/${encodeURIComponent(title)}`}
        className={`btn 
        ${padClass ? " px-4 py-3" : ""}
         ${ActionClass ? ActionClass : "btn-secondary"}`}
      >
        {label}
        {blogAction && <span className="ion-ios-arrow-round-forward"></span>}
      </Link>
    </p>
  );
}
