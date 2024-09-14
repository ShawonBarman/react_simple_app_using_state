import React, { useState } from 'react';

function App() {
  let [enquiryModalStatus, setEnquiryModalStatus] = useState(false);
  let [quoteModalStatus, setQuoteModalStatus] = useState(false);

  return (
    <div className="App">
      <header className="header">
        <nav>
          <div className="logo">SHAWON CODER</div>
          <ul>
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Project
            </li>
            <li>
              Blog
            </li>
            <li>
              Contact
            </li>
          </ul>
        </nav>
      </header>

      <div onClick={() => setEnquiryModalStatus(false)} className={`modalOverlay ${enquiryModalStatus ? 'modalOverlayPresent' : ''}`}></div>
      <button className="enBtn" onClick={()=>setEnquiryModalStatus(true)}>Enquiry Now</button>
      <div className={`modalDiv ${enquiryModalStatus ? 'modalDivPresent' : ''}`}>
        <h2>Enquiry Now</h2>
        <button className='closeBtn' onClick={() => setEnquiryModalStatus(false)}>&times;</button>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Message</label>
          <textarea placeholder="Enter your enquiry"></textarea>
          <button type="submit" className="submitBtn">Submit</button>
        </form>
      </div>

      <div onClick={() => setQuoteModalStatus(false)} className={`modalOverlay ${quoteModalStatus ? 'modalOverlayPresent' : ''}`}></div>
      <div className={`modalDiv ${quoteModalStatus ? 'modalDivPresent' : ''}`}>
        <h2>Get a Quote</h2>
        <button className='closeBtn' onClick={() => setQuoteModalStatus(false)}>&times;</button>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Service Needed</label>
          <input type="text" placeholder="Enter the service" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Phone</label>
          <input type="tel" placeholder="Enter your phone number" />
          <button type="submit" className="submitBtn">Request Quote</button>
        </form>
      </div>

      <section className="banner">
        <div className="banner-content">
          <h1>Welcome to My Website</h1>
          <p>Your one-stop solution for all your business needs.</p>
          <button className="banner-btn1" onClick={() => setEnquiryModalStatus(true)}>Enquiry Now</button>
          <button className="banner-btn2" onClick={() => setQuoteModalStatus(true)}>Get a Quote</button>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              <img src="/icons/consulting.png" alt="Consulting Icon" />
            </div>
            <h3>Business Consultancy</h3>
            <p>We provide expert advice to help you strategize and grow your business efficiently.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src="/icons/development.png" alt="Development Icon" />
            </div>
            <h3>Software Development</h3>
            <p>Our team develops custom software solutions tailored to meet your specific business needs.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <img src="/icons/marketing.png" alt="Marketing Icon" />
            </div>
            <h3>Marketing & Sales</h3>
            <p>We help you craft effective marketing strategies to boost your sales and business growth.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 SHAWON CODER. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;