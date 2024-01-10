import React from "react";
import ContactCSS from "./ContactCSS.module.css";
import "../../index.css";

const Contact = () => {
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
            role="form"
          >
            <input
              type="text"
              className={ContactCSS.form_control}
              placeholder="NAME"
              name="name"
              value=""
              required
            />

            <input
              type="email"
              className={ContactCSS.form_control}
              placeholder="EMAIL"
              name="email"
              value=""
              required
            />

            <textarea
              className={ContactCSS.form_control}
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button>
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
