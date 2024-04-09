export function SectionHeader({ title1, title2, subtitle }) {
  return (
    <div className="row justify-content-center mb-5 pb-2">
      <div className="col-md-8 text-center heading-section ftco-animate">
        <h2 className="mb-4">
          <span>{title1}</span> {title2}
        </h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
