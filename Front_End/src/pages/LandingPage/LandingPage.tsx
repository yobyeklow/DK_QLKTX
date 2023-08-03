import "./Landing.scss";
import heroSection from "/heroSectionImg.png";
import locationIcon from "/addressMark.png";
import money from "/money.png";
import security from "/security.png";
import room1 from "/room1.jpg";
import room3 from "/room3.jpg";
import room6 from "/room6.png";
import people1 from "/people1.png";
import people2 from "/people2.png";
import footer from "/footer1.png";
import { useEffect } from "react";

const LandingPage = () => {
  const list = document.querySelector(".testimonials-list");
  const items = document.querySelectorAll(
    ".testimonials-list .testimonials-item"
  );
  const dots = document.querySelectorAll(".dots li");
  function reloadSlider(index: number = 0) {
    // const checkLeft = items[index].offsetLeft;
    console.log(items);
    // list.style.left = -checkLeft + "px";
    // const lastActiveDot = document.querySelector(".dots li.active");
    // lastActiveDot?.classList.remove("active");
    // dots[index].classList.add("active");
    console.log(index);
  }
  useEffect(() => {}, []);
  return (
    <div className="landing-page">
      <div className="top-nav">
        <p className="top-nav-logo">DormifyRent</p>
        <div className="top-nav-links">
          <span>Home</span>
          <span>Dormitories</span>
          <span>About Us</span>
          <span>Contact</span>
        </div>
        <button className="top-nav-btn">Login</button>
      </div>
      <section className="hero-section">
        <div className="hero-section-description">
          <h3>Find Your Perfect Dormitory Home</h3>
          <p>
            Welcome to DormifyRent, where modern living meets a vibrant student
            community. Our stunning dormitories are designed to be your perfect
            sanctuary during your college years.
          </p>
          <button className="hero-section-btn">Learn More</button>
        </div>

        <img className="hero-section-img" src={heroSection} alt="" />
      </section>
      <section className="benefits">
        <div className="benefits-container">
          <h2>Why you choose us!</h2>
          <span className="benefits-desc">
            At DormifyRent, we take campus living to a whole new level. Our
            exceptional features and benefits redefine what it means to thrive
            during your university journey. Here's why our dormitory is the
            ultimate choice for students like you
          </span>
          <div className="benefits-list">
            <div className="benefits-item">
              <img src={locationIcon} className="benefits-item-icon"></img>
              <span>Location</span>
              <p>
                Our dormitory is strategically located at the heart of campus,
                placing you mere steps away from classes, libraries, and the
                buzz of the city.
              </p>
            </div>
            <div className="benefits-item">
              <img src={security} className="benefits-item-icon"></img>
              <span>Security</span>
              <p>
                Your safety is our utmost priority. Rest easy with our 24/7
                security and surveillance, ensuring you can focus on what truly
                matters – your academic journey.
              </p>
            </div>
            <div className="benefits-item">
              <img src={money} className="benefits-item-icon"></img>
              <span>All-Inclusive Pricing</span>
              <p>
                No hidden fees, no surprises. With our transparent all-inclusive
                pricing, you'll know exactly what you're getting.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="rooms">
        <h2>Dream Rooms Await You!</h2>
        <span>Explore our dorms and find your perfect space.</span>
        <div className="rooms-list">
          <div className="rooms-item">
            <img src={room1} alt="firstDormitory.png" />
            <div className="rooms-item-desc">
              <div className="left">
                <h3>First Dormitory</h3>
                <span>1.400.000 đ</span>
              </div>
              <div className="right">
                <span>1</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="human-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="rooms-item">
            <img src={room3} alt="firstDormitory.png" />
            <div className="rooms-item-desc">
              <div className="left">
                <h3>Second Dormitory</h3>
                <span>1.200.000 đ</span>
              </div>
              <div className="right">
                <span>3</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="human-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="rooms-item">
            <img src={room6} alt="firstDormitory.png" />
            <div className="rooms-item-desc">
              <div className="left">
                <h3>Third Dormitory</h3>
                <span>1.000.000 đ</span>
              </div>
              <div className="right">
                <span>6</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="human-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h2>Testimonials</h2>
        <span>This is what our client are saying</span>
        <div className="testimonials-list">
          <div className="testimonials-item">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non
              veniam recusandae voluptatum cumque sequi earum consequatur
              deleniti explicabo voluptate unde modi saepe, esse, architecto at
              laborum nostrum tempora necessitatibus.
            </blockquote>
            <div className="testimonials-desc">
              <div className="left">
                <img src={people1} alt="people1.png" />
              </div>
              <div className="right">
                <p>Emerson Aminoff</p>
                <span>First Dimor</span>
              </div>
            </div>
          </div>
          <div className="testimonials-item">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non
              veniam recusandae voluptatum cumque sequi earum consequatur
              deleniti explicabo voluptate unde modi saepe, esse, architecto at
              laborum nostrum tempora necessitatibus.
            </blockquote>
            <div className="testimonials-desc">
              <div className="left">
                <img src={people1} alt="people1.png" />
              </div>
              <div className="right">
                <p>Emerson Aminoff</p>
                <span>First Dimor</span>
              </div>
            </div>
          </div>
          <div className="testimonials-item">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non
              veniam recusandae voluptatum cumque sequi earum consequatur
              deleniti explicabo voluptate unde modi saepe, esse, architecto at
              laborum nostrum tempora necessitatibus.
            </blockquote>
            <div className="testimonials-desc">
              <div className="left">
                <img src={people2} alt="people1.png" />
              </div>
              <div className="right">
                <p>Emerson Aminoff</p>
                <span>First Dimor</span>
              </div>
            </div>
          </div>
          <div className="testimonials-item">
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo non
              veniam recusandae voluptatum cumque sequi earum consequatur
              deleniti explicabo voluptate unde modi saepe, esse, architecto at
              laborum nostrum tempora necessitatibus.
            </blockquote>
            <div className="testimonials-desc">
              <div className="left">
                <img src={people2} alt="people1.png" />
              </div>
              <div className="right">
                <p>Emerson Aminoff</p>
                <span>First Dimor</span>
              </div>
            </div>
          </div>
          {/* {Array(6)
            .fill(0)
            .map((index) => {
              return (
                <div className="testimonials-item">
                  <blockquote>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo non veniam recusandae voluptatum cumque sequi earum
                    consequatur deleniti explicabo voluptate unde modi saepe,
                    esse, architecto at laborum nostrum tempora necessitatibus.
                  </blockquote>
                  <div className="testimonials-desc">
                    <div className="left">
                      <img src={`people${index}`} alt="people1.png" />
                    </div>
                    <div className="right">
                      <p>Emerson Aminoff</p>
                      <span>First Dimor</span>
                    </div>
                  </div>
                </div>
              );
            })} */}
        </div>
        <ul className="dots">
          {Array(3)
            .fill(0)
            .map((value, index) => {
              if (index == 0) {
                return (
                  <li
                    className="active"
                    key={index}
                    onClick={() => reloadSlider(index)}
                  ></li>
                );
              }
              return <li key={index} onClick={() => reloadSlider(index)}></li>;
            })}
        </ul>
      </div>
      <footer className="footer">
        <img src={footer} alt="bg.png" className="footer-image" />
        <div className="footer-container">
          <div className="footer-columns">
            <div className="footer-column">
              <a className="footer-logo" href="#">
                DormifyRent
              </a>
              <span className="footer-desc">
                Solution for easy and flexible dorm rent.You can trust us
                anywhere through this platform
              </span>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Property</h4>
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    Partnership
                  </a>
                  <a href="#" className="footer-link">
                    Events
                  </a>
                  <a href="#" className="footer-link">
                    Watch Demo
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">About</h4>
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    Career
                  </a>
                  <a href="#" className="footer-link">
                    Investors Relations
                  </a>
                  <a href="#" className="footer-link">
                    Social Impact
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li className="footer-item">
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                  <a href="#" className="footer-link">
                    Administrators
                  </a>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
