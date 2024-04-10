import ContactForm from "./ContactForm";

export default function ContactFormSection() {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
      <div className="container">
        <div className="row d-flex align-items-stretch no-gutters">
          <ContactForm />
          <div className="col-md-6 d-flex align-items-stretch">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
