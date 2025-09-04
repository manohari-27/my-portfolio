import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}



function Hero() {
    const handleClick = () => {
        console.log('hi');
        alert('HAI!');
    };
    return (
        <section id="hero" className="hero">
            <h1>Hello, I'm <span className="highlight">GURI RAMA MANOHARI</span> 👋</h1>
            <p>Aspiring Web Developer | React Enthusiast | Problem Solver</p>
            <button onClick={handleClick}>SAY HI</button>
        </section>
    );
}




function About() {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <p>
                I'm learning React.js and building projects to strengthen my web
                development skills. I love solving problems and creating beautiful
                user interfaces.
            </p>
        </section>
    );
}




function Projects() {
    const projectList = [
        { title: "Todo App", desc: "A simple task management app using React." },
        { title: "Weather App", desc: "Fetches real-time weather using an API." },
        { title: "Calculator", desc: "Basic calculator built with React hooks." }
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}


function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <p>Email: <a href="mailto:23pc1a0525@nsriet.edu.in">23pc1a0525@nsriet.edu.in</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/rama-manohari-guri-871236292" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/rama-manohari-guri-871236292</a></p>
        </section>
    );
}

export default function Portfolio () {
return (
    <div className="portfolio">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
);
}