// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">ETIS Learning</h5>
            <p>Empowering learners through interactive education and personalized guidance.</p>
          </div>
          <div className="col-md-2 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#courses" className="text-light text-decoration-none">Courses</a></li>
              <li><a href="#assessment" className="text-light text-decoration-none">Assessment</a></li>
              <li><a href="#progress" className="text-light text-decoration-none">Progress</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6>Contact Us</h6>
            <ul className="list-unstyled">
              <li>Email: info@etislearning.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Learning St, Education City</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6>Subscribe to Newsletter</h6>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn etis-btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} ETIS Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;