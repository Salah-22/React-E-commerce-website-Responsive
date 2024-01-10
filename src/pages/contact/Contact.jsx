import React, { useState } from "react";
import ContactCSS from "./ContactCSS.module.css";
import "../../index.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const clearFrom = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const validateForm = () => {
    return name && email && message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Thanks for contacting us !!");
      clearFrom();
    } else {
      alert("please fill the form");
    }
  };
  return (
    <>
      <div className={ContactCSS.container}>
        <div className={ContactCSS.title}>
          <h1>Contact Us</h1>
        </div>

        <div className={ContactCSS.contact_container}>
          <form
            id="contact-form"
            className={ContactCSS.form_horizontal}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className={ContactCSS.form_control}
              placeholder="NAME"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              className={ContactCSS.form_control}
              placeholder="EMAIL"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className={ContactCSS.form_control}
              rows="10"
              placeholder="MESSAGE"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button type="submit">
              <div className={ContactCSS.btn_txt}>SEND</div>
            </button>
          </form>

          <div className={ContactCSS.direct_contact_container}>
            <div className={ContactCSS.contact_list}>
              <div className={ContactCSS.list_item}>
                <img src="map-pin.svg" alt="" />
                <span className={ContactCSS.contact_text}>City, State</span>
              </div>

              <div className={ContactCSS.list_item}>
                <img src="phone.svg" alt="" />
                <span className={ContactCSS.contact_text}>
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    (212) 555-2368
                  </a>
                </span>
              </div>

              <div className={ContactCSS.list_item}>
                <img src="mail.svg" alt="" />
                <span className={ContactCSS.contact_text}>
                  <a href="mailto:#" title="Send me an email">
                    hitmeup@gmail.com
                  </a>
                </span>
              </div>
            </div>

            <hr />
            <div className={ContactCSS.social_media_list}>
              <div href="#" target="_blank" className={ContactCSS.contact_icon}>
                <img src="facebook.svg" alt="facebook" />
              </div>

              <div href="#" target="_blank" className={ContactCSS.contact_icon}>
                <img src="twitter.svg" alt="twitter" />
              </div>

              <div href="#" target="_blank" className={ContactCSS.contact_icon}>
                <img src="instagram.svg" alt="instagram" />
              </div>
            </div>
            <hr />

            <div className={ContactCSS.copyright}>
              &copy; ALL OF THE RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
