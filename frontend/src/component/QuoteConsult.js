import InputData from "./InputData";

export default function QuoteConsult() {
  return (
    <section
      className="ftco-section ftco-consult ftco-no-pt ftco-no-pb"
      style={{ backgroundImage: "url(images/bg_5.jpg)" }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6 py-5 px-md-5 bg-primary">
            <div className="heading-section heading-section-white ftco-animate mb-5">
              <h2 className="mb-4">Request A Quote</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>

            <form action="#" className="appointment-form ftco-animate">
              <div className="d-md-flex">
                <InputData
                  type="text"
                  inputClass="form-control"
                  Outclass=""
                  placeholder="First Name"
                />
                <InputData
                  type="text"
                  inputClass="form-control"
                  Outclass="ml-md-4"
                  placeholder="Last Name"
                />
              </div>
              <div className="d-md-flex">
                <div className="form-group">
                  <div className="form-field">
                    <div className="select-wrap">
                      <div className="icon">
                        <span className="ion-ios-arrow-down"></span>
                      </div>
                      <select name="" id="" className="form-control">
                        <option value="">Select Your Course</option>
                        <option value="">UI/UX Lesson</option>
                        <option value="">Backend Lesson</option>
                        <option value="">Robotics Lesson</option>
                        <option value="">Backend Lesson</option>
                        <option value="">Other Services</option>
                      </select>
                    </div>
                  </div>
                </div>
                <InputData
                  type="text"
                  inputClass="form-control"
                  Outclass="ml-md-4"
                  placeholder="Phone"
                />
              </div>
              <div className="d-md-flex">
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <InputData
                  type="submit"
                  value="Request A Quote"
                  inputClass="btn btn-secondary py-3 px-4"
                  Outclass="ml-md-4"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
