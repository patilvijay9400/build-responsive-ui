import React from "react";

const Footer = () => {
  return (
    <footer className="primary-bg text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-between">
            <ul className="d-flex gap-2 gap-md-4 list-unstyled mb-0">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="d-flex gap-1 gap-md-3 list-unstyled mb-0">
              <li>
                <a href="#"><i class='bx bxl-behance text-white' ></i></a>
              </li>
              <li>
                <a href="#"><i class='bx bxl-facebook text-white'></i></a>
              </li>
              <li>
                <a href="#"><i class='bx bxl-twitter text-white'></i></a>
              </li>
              <li>
                <a href="#"><i class='bx bxl-instagram text-white' ></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
