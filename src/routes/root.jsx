import talky from '../images/hero.png'
import support from '../images/section1.png'
import anonymity from '../images/section2.png'

export default function Root() {
    return (
      <>

      <div id="header">
        
        <nav id="header-nav">
            <li><b>Talky</b></li>
            <li>About</li>
            <li>Who We Serve</li>
            <li>Blog</li>
            <li>Contact</li>
        </nav>
      </div> 
     

        <div id="root-body">
       
        <div id="hero">
        <div id="hero-text">
           <h2>
           Speak Freely, Without Judgment
           </h2>
           <p>Welcome to Talky, a platform where you can share your thoughts, 
              feelings, and problems without the need to reveal your identity. 
              Whether you're dealing with stress, anxiety, relationship issues,
              or simply need someone to listen, we're here for you. 
              Our anonymous support community is built on the principles of empathy,
              understanding, and confidentiality. Join us to open up, be heard,
              and receive support from our caring community of listeners.
              Your privacy is our priority, and your voice matters, even anonymously.</p>
        </div>
        <img id='hero-image' src={talky}/>
        </div>

        {/* First  Section */}
        <div id="section">
        <div id="section-text">
           <h2>
           Easy Process to Get Support
           </h2>
          <ol>
            <li><b>Submit Your Problem:</b> Fill out our anonymous submission form with your thoughts, feelings, or problems.</li>
            <li><b>Receive Empathetic Responses:</b> Our caring community of listeners will provide supportive responses and feedback.</li>
            <li><b>Engage Anonymously:</b> Join the conversation, ask questions, or offer support to others without revealing your identity.</li>
          </ol>
        </div>
        <img id='section-image' src={support}/>
      </div>

 

        {/* second  Section */}
        <div id="section1">
        <div id="section1-text">
           <h2>
           The Power of Anonymity
           </h2>
          <p>Safe and Secure: Anonymity ensures your privacy and protects your identity, allowing you to share openly without fear of judgment.
Greater Honesty: With anonymity, you can express yourself more honestly and authentically, leading to deeper and more meaningful conversations.
Reduced Stigma: Anonymity removes barriers and stigma associated with seeking support, making it easier for individuals to reach out for help.</p>
        </div>
        <img id='section1-image' src={anonymity}/>
      </div>

      <footer id='buttom'>
       <h4>© 2024 Talky.</h4>
      </footer>
      </div>
     

      
      </>
    );
  }