
import girl3 from './girl7.png'
import React, { useState } from 'react';
import swal from 'sweetalert';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform any necessary actions here, such as sending the form data

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');

      // Use SweetAlert with an async function
      await swal('Your message sent successfully! \n We will contact you soon :)', {
        icon: 'success',
      });

    } catch (error) {
      // Handle error if needed
      console.error('Error:', error);

      // Use SweetAlert for error message
      await swal('Something went wrong!', {
        icon: 'error',
      });
    }
  };

  return (

    <div class="contact-us-container">
        <form class="contact-form" onSubmit={handleSubmit}>
             <p>
                 We would love to hear from you! Whether you have a question, feedback,
                 or suggestion.<br/> please feel free to reach out to us using the form
                 below or by emailing us at shesafe@gmail.com.<br/> We will get back to you
                 as soon as possible. Thank you for your interest in SheSafe!
             </p>
             <input type="text" name="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)}required />
             <input type="email" name="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}required />
             <textarea
             name="message"
             placeholder="Your message"
             rows="5"
             required
             value={message} onChange={(e) => setMessage(e.target.value)}
             ></textarea>
             <button type="submit">Send</button>
         </form>
         <div class="contact-content">
            {/* {showModal && (
              <div className="modal">
                <p>{showMessage ?'Your message sent successfully! We will contact you soon :)' :'Something went wrong!'}</p>
                <button onClick={closeModal}>Close</button>
              </div>
            )} */}
             <img src={girl3}alt="Circle " />
             
         </div>
     </div>

  );
  
}

export default ContactUs;