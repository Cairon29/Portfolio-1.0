import { TbMessageChatbotFilled } from "react-icons/tb";

import './contact-me-section-styles.css';
export const ContactMeSection = () => {
  return (
    <div>
      <h2>Reach me out!</h2>
      <section id="contact-me-section">
          <article className='contact-me-article'>
            <h3>Get in touch</h3>
            <div className='contact-me-content'>
              <p>
                Do you have any bussines idea? Lets talk about it and make it real! I'm always open to new projects and ideas.
              </p>
              <div className='contact-me-icon'>
                <TbMessageChatbotFilled size={125}/>
              </div>
            </div>
          </article>
          <article className='contact-me-article'>
            <form id='contact-me-form'>
              <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className='input-group'>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className='input-group'>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" id='contact-email-submit-button'>Send</button>
            </form>
          </article>
      </section>
    </div>
  )
}
