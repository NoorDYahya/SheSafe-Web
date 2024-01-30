
import girl3 from './girl7.png'
const ContactUs = () => {

  return (

    <div class="contact-us-container">
        <form class="contact-form">
             <p>
                 We would love to hear from you! Whether you have a question, feedback,
                 or suggestion.<br/> please feel free to reach out to us using the form
                 below or by emailing us at shesafe@gmail.com.<br/> We will get back to you
                 as soon as possible. Thank you for your interest in SheSafe!
             </p>
             <input type="text" name="name" placeholder="Your name" required />
             <input type="email" name="email" placeholder="Your email" required />
             <textarea
             name="message"
             placeholder="Your message"
             rows="5"
             required
             ></textarea>
             <button type="submit">Send</button>
         </form>
         <div class="contact-content">
             <img src={girl3}alt="Circle " />
             
         </div>
     </div>

  );
  
}

export default ContactUs;