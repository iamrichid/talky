import ad1 from '../images/ad1.png'
import support from '../images/section1.png'
import anonymity from '../images/section2.png'
import ssp from '../images/ssp.svg'

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
     
      <div className="container">
<div className='hero'>
  <div>
    <div>
      <h2 className='hero-heading'>Find solace in sharing your feelings anonymously, 
      without judgment. Connect with support and understanding, all in one place</h2>
      </div>
    
    <div>
      <p>Our platform provides a nurturing environment for 
      you to share your feelings anonymously, connecting you with
       support and understanding. Experience a space where your voice is heard,
        your struggles acknowledged,
       and your journey embraced, all in one secure place.</p>
       
       </div>

    <div className='hero-cta'>
      <button className='hero-cta-button'>Sign up</button>
    </div>
    
</div>

<div className="hero-image">
  <img src={ssp} alt="hero image" />
</div>

</div>
        

</div>
        
     

      
      </>
    );
  }