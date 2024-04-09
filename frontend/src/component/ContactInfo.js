export function ContactInfo() {
  return (
    <div className="py-2 bg-primary">
      <div className="container">
        <div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
          <div className="col-lg-12 d-block">
            <div className="row d-flex">
              <div className="col-md-5 pr-4 d-flex topper align-items-center">
                <div className="icon bg-fifth mr-2 d-flex justify-content-center align-items-center">
                  <span className="icon-map"></span>
                </div>
                <span className="text">
                  198 West 21th Street, Suite 721 F.C.T Abuja 90001
                </span>
              </div>
              <div className="col-md pr-4 d-flex topper align-items-center">
                <div className="icon bg-secondary mr-2 d-flex justify-content-center align-items-center">
                  <span className="icon-paper-plane"></span>
                </div>
                <span className="text">info@bytebuddiez.com</span>
              </div>
              <div className="col-md pr-4 d-flex topper align-items-center">
                <div className="icon bg-tertiary mr-2 d-flex justify-content-center align-items-center">
                  <span className="icon-phone2"></span>
                </div>
                <span className="text">+234 810 7060 160</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
