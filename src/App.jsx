import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiExternalLink, FiMail, FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaBook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiTailwindcss, SiMongodb } from 'react-icons/si';
import ProjectCard from './ProjectCard';
import './index.css';
import './skills.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Optional: Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'skills', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <a href="#intro" className={`nav-item ${activeSection === 'intro' ? 'active' : ''}`} onClick={() => setActiveSection('intro')}>AN</a>
            <a href="#skills" className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => setActiveSection('skills')}>SKILLS</a>
            <a href="#projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setActiveSection('projects')}>PROJECTS</a>
            <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setActiveSection('about')}>ABOUT</a>
            <a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setActiveSection('contact')}>CONTACT</a>
          </nav>

          <div className="theme-toggle">
            <button 
              className={theme === 'light' ? 'active' : ''} 
              onClick={() => toggleTheme('light')}
              aria-label="Light Mode"
            >
              <FiSun size={20} />
            </button>
            <div className="divider"></div>
            <button 
              className={theme === 'dark' ? 'active' : ''} 
              onClick={() => toggleTheme('dark')}
              aria-label="Dark Mode"
            >
              <FiMoon size={20} />
            </button>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <section className="intro-section" id="intro">
          <div className="intro-header">
            Hello world
          </div>
          <div className="intro-body">
            <h1 className="intro-title">Anshul Negi</h1>
            
            <p className="intro-description">
              I am a Computer Science student with a focus on Cyber Security and MERN stack development. I love tackling CTF challenges and building secure systems. I'm part of Pookie Bears, a CTF team ranked in the top 50 in India on CTFtime.
            </p>
            
            <p className="intro-description">
              Along with security, I enjoy creating full-stack web applications using the MERN stack. Always open to new opportunities and learning in the tech space—let's connect!
            </p>

            <div className="quick-links-container">
              <h3 className="quick-links-title">Quick Links</h3>
            </div>
          </div>
          <div className="quick-links-wrapper">
            <div className="quick-links">
              <a href="#" className="quick-link">
                <FaLinkedin color="#0077b5" /> LinkedIn <FiExternalLink size={14}/>
              </a>
              <a href="#" className="quick-link">
                <FaGithub /> GitHub <FiExternalLink size={14}/>
              </a>
              <a href="#" className="quick-link">
                <FaXTwitter /> X/Twitter <FiExternalLink size={14}/>
              </a>
              <a href="#" className="quick-link">
                <FaBook /> CTF Blogs <FiExternalLink size={14}/>
              </a>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <h2 className="section-title">Skills</h2>
          
          <div className="marquee-container">
            <div className="marquee-content">
              <div className="marquee-group">
                <span>Cybersecurity</span>
                <span>Web dev</span>
                <span>Frontend</span>
                <span>Backend</span>
                <span>Fullstack</span>
              </div>
              <div className="marquee-group">
                <span>Cybersecurity</span>
                <span>Web dev</span>
                <span>Frontend</span>
                <span>Backend</span>
                <span>Fullstack</span>
              </div>
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill-row">
              <div className="skill-label">Programming Languages</div>
              <div className="skill-items">
                <SiJavascript color="#F7DF1E" size={32} />
                <SiPython color="#3776AB" size={32} />
              </div>
            </div>
            
            <div className="skill-row">
              <div className="skill-label">Speaking Languages</div>
              <div className="skill-items text-items">
                English, Hindi, German
              </div>
            </div>

            <div className="skill-row">
              <div className="skill-label">Tools & Framework</div>
              <div className="skill-items">
                <SiReact color="#61DAFB" size={32} />
                <SiNodedotjs color="#339933" size={32} />
                <SiMongodb color="#47A248" size={32} />
                <SiTailwindcss color="#06B6D4" size={32} />
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <ProjectCard 
              title="Finance Tracker App" 
              description="A Full Stack application for managing & tracking finances with user-friendly account creation and smooth operation."
              link="#"
            />
            <ProjectCard 
              title="Image Generator" 
              description="An image generator that uses Cloudflare Workers AI to generate images and the Hono framework for the JavaScript runtime"
              link="https://image-generator-smoky.vercel.app/"
            />
          </div>
        </section>

        <section className="about-section" id="about">
          <h2 className="section-title">About</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">M.Tech CSE</h3>
                <p className="timeline-subtitle">IIT BHU</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">B.Tech CSE</h3>
                <p className="timeline-subtitle">Siksha 'O' Anusandhan</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">High School Education</h3>
                <p className="timeline-subtitle">Doon High School</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2 className="section-title">Contact</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <a href="mailto:anshulniggi@gmail.com" className="contact-link">
                <FiMail className="contact-icon" />
                <span>anshulniggi@gmail.com</span>
              </a>
              <a href="tel:+91987654321" className="contact-link">
                <FiPhone className="contact-icon" />
                <span>+91 987654321</span>
              </a>
            </div>

            <div className="social-links-grid">
              <a href="#" className="social-box" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="social-box" aria-label="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="#" className="social-box" aria-label="X / Twitter">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="social-box" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
