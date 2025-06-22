import Model3d from './modelComponent'
import skillsgroup from './images/skillsgroup.png'

function Cardgrid () {
    return (
        <div class="card-grid">
            <div class="card intro">
                <h2 class="card-title">HI THERE, I'M BAVON</h2>
                <p class="card-text">
                    I specialize in frontend development, crafting dynamic, visually engaging, and highly responsive websites that provide seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I focus on building modern web interfaces that are not only aesthetically appealing but also optimized for performance and accessibility. My expertise extends to advanced frameworks like React and Tailwind CSS, enabling me to create interactive, scalable, and efficient applications. Whether it's designing sleek UI components, implementing smooth animations, or enhancing user interactions, my goal is to develop web solutions that are both functional and innovative.
                </p>
            
                <div class="model-box">
                    <Model3d/>
                </div>
    
            </div>
            <div class="card tech">
                <h2 class="card-title">TECH STACK</h2>
                <p class="card-text">
                    I specialize in a diverse range of programming languages, frameworks, and development tools that empower me to build robust, scalable, and high-performing applications. With a strong command of HTML, CSS, and JavaScript, I create visually appealing and responsive web interfaces that enhance user engagement. My expertise extends to modern frameworks like React, Tailwind CSS, and Spline, enabling me to develop interactive, efficient, and maintainable front-end architectures.
                </p>

                <img src={skillsgroup} alt="Skill Group" className='skill-group'/>

            </div>
            <div class="card time">
                <h2 class="card-title">VERY FLEXIBLE</h2>

                <p class="card-text">Based in Kenya, Nairobi and open to remote work worldwide.</p>

                <button class="btn"><i class="fa-regular fa-paper-plane"></i>  CONTACT ME</button>

            </div>
            <div class="card passion">
                <h2 class="card-title">PASSION FOR CODING</h2>
                <p class="card-text">Solving problems and building solutions through code. Programming is my profession-it's my passion. I enjoy exploring and enhancing my skills.</p>
            </div>
        </div>
    )
}

export default Cardgrid