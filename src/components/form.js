import "./form.css"
import React, { useRef }  from 'react'
import emailjs from "emailjs-com"

export const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jngnmdk', 'template_p3oll0u', form.current, 'IYOM6wXXDZSpk8Io6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset() ; 
  };

  return (
    <div className="form">

<form ref={form} onSubmit={sendEmail}>
            <label>Your name</label>
            <input type="text" name="name"></input>
            <label>Email</label>
            <input type="email" name="email"></input>
            <label>Subject</label>
            <input type="text" name="subject"></input>
            <label>Message</label>
           <textarea rows="6" placeholder="Any opinion or message to me " name="message"/>
          <div>
          <input type="submit" value="Send message"></input>
       </div> </form>
    </div>
  )
};
export default Form;