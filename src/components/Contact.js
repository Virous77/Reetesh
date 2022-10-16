import React, { useState } from "react";
import "../styles/Contact.css";
import { useFunctionContext } from "../store/functionContext";
import { HiOutlineMail } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import win from "../assets/259.png";

const Contact = () => {
  const {
    message,
    setMessage,
    yourName,
    setYourName,
    yourEmail,
    setYourEmail,
    submitForm,
    dataFetching,
    isSubmitted,
  } = useFunctionContext();

  const [borderName, setBorderName] = useState(false);
  const [borderEmail, setBorderEmail] = useState(false);
  const [borderText, setBorderText] = useState(false);

  return (
    <section className="contactMe">
      <div className="contactHead">
        <div>
          <h2>Contact Me</h2>

          <p>
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>

          <div className="email">
            <a href="mailto:rajreetesh7@gmail.com">
              <HiOutlineMail /> Me
            </a>
          </div>
        </div>

        <div className="messageMe">
          {!isSubmitted ? (
            <form onSubmit={submitForm}>
              <div className="yourName">
                <div className={borderName ? "nameActive" : "nameHide"}>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                    onFocus={() => setBorderName(true)}
                    onBlur={() => setBorderName(false)}
                  />
                </div>

                <div className={borderEmail ? "emailActive" : "emailHide"}>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={yourEmail}
                    onChange={(e) => setYourEmail(e.target.value)}
                    onFocus={() => setBorderEmail(true)}
                    onBlur={() => setBorderEmail(false)}
                  />
                </div>
              </div>

              <div
                className={`textMessage ${
                  borderText ? "textActive" : "textHide"
                }`}
              >
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setBorderText(true)}
                  onBlur={() => setBorderText(false)}
                />
              </div>

              <div className="sendMessage">
                <button>{dataFetching ? "Sending..." : "Submit"}</button>
              </div>
            </form>
          ) : (
            <div className="greet">
              <p>Thank You for reaching to me!!</p>
              <img src={win} alt="nice" />
            </div>
          )}
        </div>
      </div>

      <div className="googleMap">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=mahendru patna&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>

        <div className="imHere">
          <IoHomeOutline className="homeIcon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
