import InputData from "./InputData";

export default function ContactForm() {
  return (
    <div className="col-md-6 p-4 p-md-5 order-md-last bg-light">
      <form action="#">
        <InputData
          type="text"
          inputClass="form-control"
          Outclass=""
          placeholder="First Name"
        />
        <InputData
          type="text"
          inputClass="form-control"
          Outclass=""
          placeholder="Your Email"
        />
        <InputData
          type="text"
          inputClass="form-control"
          Outclass=""
          placeholder="Subject"
        />
        <div className="form-group">
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            className="form-control"
            placeholder="Message"
          ></textarea>
        </div>
        <InputData
          type="submit"
          value="Send Message"
          inputClass="btn btn-primary py-3 px-5"
          Outclass=""
        />
      </form>
    </div>
  );
}
