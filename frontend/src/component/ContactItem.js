export default function ContactItem({ title, content }) {
  return (
    <div className="col-md-3 d-flex">
      <div className="bg-light align-self-stretch box p-4 text-center">
        <h3 className="mb-4">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
