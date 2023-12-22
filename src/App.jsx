
import './App.css'

function App() {


  return (
    <>
     <main>
     <div class="hero">
        <nav>
            <div class="logo">
            <h1>LOGO</h1>
            </div>
            <div class="others">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Services</li>
                    <li>About</li>
        
                    </ul>
                    <button class="hire-me-btn">Hire Me</button>

            </div>
          
            

        </nav>
        <div class="herodetails">
            <div class="hero-intro">
                <p class="its-me">Hello,its me</p>
                <h1 class="name">Cyril Mwalimu</h1>
                <h6 class="specification">And Iam a Fullstack Developer</h6>
                <p >I'm A Fullstack developer with experience for over 3 years.Expertise is to design, create and market websites....  <span><button class="more">more</button></span></p>
                <div class="buttons">
                    <button>Download CV</button>
                    <BUTTON>Lets Talk</BUTTON>
                </div>
            </div>
            <div class="img-holder">
                <img class="hero-img" src="IMG-20231214-WA0017.jpg" alt="">
            </div>
        </div>

    </div>
    <div class="projects">
        <h1>Latest projects</h1>
        <div class="cards">
            <div class="card">iam a card</div>
            <div class="card">iam a card</div>
            <div class="card">iam a card</div>
        </div>
        <p class="more-projects">more projects arrow</p>
    </div>
    <div class="technologies">
        <h1>My Latest Project</h1>
        <div class="iconholder">
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
            <div class="icon"></div>
        </div>

    </div>
    <div class="services">
        <h1>Our Services</h1>
        <div class="services-holder">
            <div class="service-card">ia m a service card</div>
            <div class="service-card">ia m a service card</div>
            <div class="service-card">ia m a service card</div>
        </div>
    </div>
    <div class="contact">
        <h1>Contact Me</h1>
        <div class="contact-details">
            <div class="contact-intro">
                Feel free to rerach me from different channels
                <div class="icons">
                 <div class="social-icon"></div>
                 <div class="social-icon"></div>
                 <div class="social-icon"></div>
                 <div class="social-icon"></div>
              
                </div>
            </div>
            <form action="">
                <input type="text" placeholder="Fullname">
                <input type="email" placeholder="Email">
                <textarea name="" id="" cols="39" rows="10"></textarea>
                <button type="submit">Lets Talk</button>
            </form>
        </div>
    </div>
    <div class="about"></div>
    <footer>
        footer goes here
    </footer>


     </main>
    </>
  )
}

export default App
