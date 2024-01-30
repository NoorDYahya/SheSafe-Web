import girl from './girl5.png'
import girl3 from './girl7.png'
const About = () => {


    return ( 
        <div className="About">
            <div class="head">
                <h2 id = "AboutId"><br/><br/><br/></h2>
                <h2>About us</h2>
                <img src={girl}alt="Circle " />
            </div>
            <div class="who-we-are-container">
                <h1>What is SheSafe? 🌟</h1>
                <p>
                    Embark on a magical journey with us into the heart of web safety, where
                    learning is as fun as it is important. Our mission? To sprinkle a little
                    savvy into the online adventures of girls, teenagers, and women
                    everywhere!
                    <br /><br />
                    '<span>She</span>' embodies strength, and '<span>Safe</span>' defines our
                    commitment to your online well-being.
                    <br /><br />
                    🌈 Our Colorful Game: Dive into a world of wonder with each level of our
                    game! Wander through 'Privacy Park' under the whispers of wise trees,
                    fish out tricks in 'Phishing Pond', and unlock secrets in 'Password
                    Fortress'. It’s a playful, interactive way to become a web wizard!
                    <br /><br />
                    💬 Chatty AI Companion: Got web worries or digital dilemmas? Fear not!
                    Our friendly AI companion is here to chat, share tips, and giggle along
                    with you on all things internet safety.
                    <br /><br />
                    Join us at SheSafe for a delightful dash through the digital domain,
                    where every click is a chance to learn, laugh, and leap into web wisdom!
                    🎉✨  <br /><br />
                </p>
            </div>
            <div className="meet-the-team container" style={{ maxWidth: '1000px',marginLeft: '210px',marginTop: '50px', padding: '50px', textAlign: 'center', borderRadius: '10px', position: 'center', backgroundColor: 'rgba(247, 5, 114, 0.845)' }}>
                <h1 style={{ fontSize: '32px', color: 'white', marginBottom: '20px', marginTop: '10px' }}>Meet the Team </h1>
                <p style={{ fontSize: '18px', lineHeight: '1.5', margin: '0', color: 'black' }}>
                We are a group of passionate students who want to
                empower girls, teenagers, and women to navigate the internet safely
                and confidently. team members:
                </p>
                {/* <div style={{ display: 'inline-block', width: '200px', margin: '10px', marginRight: '112px' }}>
                <h3 style={{ fontSize: '20px', margin: '10px 0', textAlign: 'center' }}>Yamamah Gbarieh</h3>
                <p style={{ fontSize: '16px', margin: '0', textAlign: 'center' }}>Mentor</p>
                </div> */}

                <div style={{ display: 'inline-block', width: '200px', margin: '10px', marginRight: '112px' }}>
                <h3 style={{ fontSize: '20px', margin: '10px 0', textAlign: 'center' }}>Nadya Mani</h3>
                <p style={{ fontSize: '16px', margin: '0', textAlign: 'center' }}>Frontend Developer</p>
                </div>
                <div style={{ display: 'inline-block', width: '200px', margin: '10px', marginRight: '112px' }}>
                <h3 style={{ fontSize: '20px', margin: '10px 0', textAlign: 'center' }}>Noor Yahya</h3>
                <p style={{ fontSize: '16px', margin: '0', textAlign: 'center' }}>Frontend Developer</p>
                </div>
                <br/>
                <div style={{ display: 'inline-block', width: '200px', margin: '10px', marginRight: '112px' }}>
                <h3 style={{ fontSize: '20px', margin: '10px 0', textAlign: 'center' }}>Alaa Muhessien</h3>
                <p style={{ fontSize: '16px', margin: '0', textAlign: 'center' }}>Backend Developer</p>
                </div>
                <div style={{ display: 'inline-block', width: '200px', margin: '10px' }}>
                <h3 style={{ fontSize: '20px', margin: '10px 0', textAlign: 'center' }}>Samah Rajabi</h3>
                <p style={{ fontSize: '16px', margin: '0', textAlign: 'center' }}>Backend Developer</p>
                </div>
            </div>
           <div id="contact"><br/></div>
           <h1 >Contact Us </h1>
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

                
           
        </div>
     );
}
 
export default About;