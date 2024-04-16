export default function TestimonyItem({ imgSrc, text, name, position }) {
  return (
    <>
      <div className="item">
        <div className="testimony-wrap d-flex">
          <div
            className="user-img mr-4"
            style={{ backgroundImage: `url(${imgSrc})` }}
          ></div>
          <div className="text ml-2 bg-light">
            <span className="quote d-flex align-items-center justify-content-center">
              <i className="icon-quote-left"></i>
            </span>
            <p>{text}</p>
            <p className="name">{name}</p>
            <span className="position">{position}</span>
          </div>
        </div>
      </div>
    </>
  );
}
