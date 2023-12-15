import React, { useRef } from "react";
import "./Contact.scss";
import { HiOutlineMail } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import successImage from "../../assets/259.png";
import { useMutation } from "react-query";
import { sendEmail } from "../../api/api";
import errorImage from "../../assets/error.svg";

const Contact = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { data, isLoading, mutate, isError } = useMutation(sendEmail);

  const handleEmail = () => {
    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !messageRef.current?.value
    )
      return;
    const info = {
      url: "/send-email",
      body: {
        userName: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      },
    };
    mutate(info);
  };

  return (
    <section className="contactMe">
      <div className="contactHead">
        <div>
          <h2 className="styleh2">Contact Me</h2>

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
          {!data && !isError ? (
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="yourName">
                <div className="input">
                  <input type="text" placeholder="Enter Name" ref={nameRef} />
                </div>

                <div className="input">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    ref={emailRef}
                  />
                </div>
              </div>

              <div className="textMessage input">
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="Your Message"
                  ref={messageRef}
                />
              </div>

              <div className="sendMessage">
                <button onClick={handleEmail} type="button">
                  {isLoading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          ) : (
            <>
              {data && data.status === true ? (
                <div className="greet">
                  <p>Thank You for reaching to me. will contact you soon!</p>
                  <img src={successImage} alt="nice" />
                </div>
              ) : (
                <div className="greet">
                  <p>
                    There something went wrong while sending mail. Try again
                    later!
                  </p>
                  <img src={errorImage} alt="nice" />
                </div>
              )}
            </>
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
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=Akash nidhi apartment Ahmedabad&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
