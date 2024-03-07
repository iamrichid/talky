import ad1 from '../images/ad1.png'
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
     
      <div className="container">
<div className="hero">
        <article>
          <h2>Talky</h2>
          <p>Welcome to Talky, a platform where you can share your thoughts, 
              feelings, and problems without the need to reveal your identity.</p> 

          <h3>Tank it</h3>
          <p className='tanker'>whatever feelings are eating you up, we can tank it!</p>
        
         <img src={ad1} alt="" />

         
        </article>
        </div>

        
      </div>
        
     

      
      </>
    );
  }