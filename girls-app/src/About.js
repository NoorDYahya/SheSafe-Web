import girl from './girl5.png'
import girl2 from'./girl6.jpeg'
const About = () => {


    return ( 
        <div className="About">
            <div class="head">
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
            <div class="meet-the-team-container">
                <img src={girl2}alt="Circle " />
                <h1>Meet the Team 🙋‍♀️</h1>
                <p>
                    We are a group of passionate students who want to
                    empower girls, teenagers, and women to navigate the internet safely
                    and confidently. Here are some of our awesome team members:
                </p>
                <div class="team-member">
                    <h3>Nadya Mani</h3>
                    <p>Frontend Developer</p>
                </div>
                <div class="team-member">
                    <h3>Noor Yahya</h3>
                    <p>Frontend Developer</p>
                </div>
                <div class="team-member">
                    <h3>Alaa Muhessien</h3>
                    <p>Backend Developer</p>
                </div>
                <div class="team-member">
                    <h3>Samah Rajabi</h3>
                    <p>Backend Developer</p>
                </div>
           </div>


                
           
        </div>
     );
}
 
export default About;