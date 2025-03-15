import { TbMessageChatbotFilled } from "react-icons/tb";
import './contact-me-section-styles.css';

interface PropsValues {
  email: string;
  subject: string;
  message: string;
}

interface PropsFunctions {
  hdlEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hdlSubject: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hdlMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  hdlSubmmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface Props {
  propsValues: PropsValues;
  propsFunctions: PropsFunctions;
}

export const ContactMeSectionStructure = ({propsValues, propsFunctions}: Props)=> {
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
              <TbMessageChatbotFilled size={125} />
            </div>
          </div>
        </article>
        <article className='contact-me-article'>
          <form id='contact-me-form' onSubmit={propsFunctions.hdlSubmmit}>
            <section className='input-group'>
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="email@example.com" 
                  value={propsValues.email}
                  onChange={propsFunctions.hdlEmail}
                />
              </div>
            </section>
            <section className='input-group'>
              <label htmlFor="subject">Subject</label>
              <div className="input-wrapper">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  placeholder="ej: We are intersted on you!" 
                  value={propsValues.subject}
                  onChange={propsFunctions.hdlSubject}
                />
              </div>
            </section>

            <section className='input-group'>
              <label htmlFor="message">Message</label>
              <div className="input-wrapper">
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  value={propsValues.message}
                  onChange={propsFunctions.hdlMessage}
                >
                </textarea>
              </div>
            </section>
            <button type="submit" id='contact-email-submit-button'>Send</button>
          </form>
        </article>
      </section>
    </div>
  )
}
