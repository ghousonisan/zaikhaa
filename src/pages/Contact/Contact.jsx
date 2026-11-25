import { useState } from "react";
import styles from "./Contact.module.css";
import mailIcon from "../../assets/icons/mail01.svg";
import callIcon from "../../assets/icons/call02.svg";
import locationIcon from "../../assets/icons/location01.svg";

const enquiryOptions = [
  "General Enquiry",
  "Menu and Food Information",
  "Feedback and Suggestions",
  "Franchise Enquiry",
  "Others",
];

const contactDetails = [
  { icon: mailIcon, title: "Mail Us", text: "zaikhaa@gmail.com" },
  { icon: callIcon, title: "Call Us", text: "+91 - 1234567890" },
  {
    icon: locationIcon,
    title: "Address",
    text: "1st Floor, JC Tower, Karur Bypass Rd, Annamalai Nagar, Tiruchirappalli - 620018.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    purpose: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <span className={styles.badge}>Contact Us</span>
          <h1 className={styles.heroTitle}>Let&apos;s Talk Flavours</h1>
          <p className={styles.heroDesc}>
            Have a question, planning a visit, or craving something delicious? We&apos;re here to
            make your Zaikhaa experience special.
          </p>

          <div className={styles.detailsList}>
            {contactDetails.map((d) => (
              <div className={styles.detailItem} key={d.title}>
                <div className={styles.detailIcon}>
                  <img src={d.icon} alt="" />
                </div>
                <div>
                  <p className={styles.detailTitle}>{d.title}</p>
                  <p className={styles.detailText}>{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className={styles.formCard} onSubmit={handleSubmit}>
          <p className={styles.formTitle}>Fill Out Form</p>

          {submitted ? (
            <div className={styles.successBox}>
              <p>Thank you! Your enquiry has been submitted.</p>
              <button type="button" className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                Send another
              </button>
            </div>
          ) : (
            <>
              <div className={styles.field}>
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="purpose">Purpose of Enquiry</label>
                <select id="purpose" name="purpose" value={form.purpose} onChange={handleChange} required>
                  <option value="" disabled>
                    Select
                  </option>
                  {enquiryOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <p className={styles.consent}>
                &ldquo;I agree to be contacted by Zaikhaa regarding my inquiry.&rdquo;
              </p>

              <button type="submit" className={styles.submitBtn}>
                Submit Form
              </button>
            </>
          )}
        </form>
      </section>
    </div>
  );
}
