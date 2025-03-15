import { useState } from "react";
import { ContactMeSectionStructure } from "./ContactMeSectionStructure"
import emailjs from '@emailjs/browser';

export const ContactMeSection = () => {
  interface EmailData {
    email: string;
    subject: string;
    message: string;
  }
  const [ emailData, setEmailData ] = useState<EmailData>({
    email: "",
    subject: "",
    message: ""
  })

  const hdlEmailData = {
    hdlEmail: (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmailData((prev) => ({...prev, email: e.target.value}))
    },
    hdlSubject: (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmailData((prev) => ({...prev, subject: e.target.value}))
    },
    hdlMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setEmailData((prev) => ({...prev, message: e.target.value}))
    },
    hdlSubmmit: (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (emailData.email && emailData.subject && emailData.message) {
        const templateData = {
          email: emailData.email,
          subject: emailData.subject,
          message: emailData.message
        }
        emailjs.send("service_4y3rlya","template_unh7h9j", templateData, 'ywDeEgGUrzFe5aJnX').then(
          (result) => {
            console.log(result.text)
          })
        setEmailData({
          email: "",
          subject: "",
          message: ""
        })
      }
      
    }
  }

  return (
    <>
      <ContactMeSectionStructure
        propsValues={emailData}
        propsFunctions={hdlEmailData}
      />
    </>
  )
}
