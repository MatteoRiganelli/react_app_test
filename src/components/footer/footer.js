import React from "react";
import footerCss from "../../css/mainLayout/footer/footer.css"

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid footer fixed-bottom">
        <div className="row">
          <div className="col mr-auto">
            <p>Book Seller Company</p>
            <p>Via Paolo Dell'Aguzzo, 56</p>
            <p>Senigallia, Ancona, Italia</p>
            <p>info@paolodellaguzzo.com</p>
          </div>
          <div className="col">
            <div className="pull-right">
              <a
                href="https://www.facebook.com/paolodellaguzzocom/"
                target="_blank"
              >
                <i className="fab fa-facebook fa-2x" />
              </a>
              <a href="https://twitter.com/PaoloDellaguzzo" target="_blank">
                <i className="fab fa-twitter fa-2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/paolodellaguzzo/"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
