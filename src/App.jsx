import { useState, useEffect, useRef } from 'react';
import { FiSun, FiMoon, FiExternalLink, FiMail, FiPhone, FiMenu, FiX, FiFileText, FiSend, FiCheck, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaBook, FaFlag, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiJavascript, SiPython, SiC, SiReact, SiNodedotjs, SiTailwindcss, SiMongodb, SiPostman, SiPandas, SiNumpy, SiJupyter, SiTensorflow, SiScikitlearn } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import ProjectCard from './ProjectCard';
import './index.css';
import './skills.css';

// ── EmailJS config ── set via env variables (VITE_EMAILJS_*) ──
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState('idle'); // idle | sending | sent | error
  const formRef = useRef(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (contactStatus === 'sending') return;
    setContactStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setContactStatus('sent');
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setContactStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setContactStatus('error');
      setTimeout(() => setContactStatus('idle'), 5000);
    }
  };

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Mobile Top Bar */}
      <div className="mobile-top-bar">
        <div className="mobile-logo">AN</div>
        <button className="hamburger-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <aside className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <a href="#intro" className={`nav-item ${activeSection === 'intro' ? 'active' : ''}`} onClick={() => { setActiveSection('intro'); closeMobileMenu(); }}>AN</a>
            <a href="#skills" className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => { setActiveSection('skills'); closeMobileMenu(); }}>SKILLS</a>
            <a href="#projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => { setActiveSection('projects'); closeMobileMenu(); }}>PROJECTS</a>
            <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={() => { setActiveSection('about'); closeMobileMenu(); }}>ABOUT</a>
            <a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => { setActiveSection('contact'); closeMobileMenu(); }}>CONTACT</a>
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
            <div className="intro-social-links">
              <a href="https://www.linkedin.com/in/anshulnegi09/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="intro-social-link"><FaLinkedin size={16} /></a>
              <a href="https://github.com/anshulnegi09/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="intro-social-link"><FaGithub size={16} /></a>
              <a href="http://x.com/hiAnshul" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="intro-social-link"><FaXTwitter size={16} /></a>
            </div>
          </div>
          <div className="intro-body">
            <h1 className="intro-title">Anshul Negi</h1>
            <p className="intro-description">
              I am a Computer Science student with a focus on Cyber Security and MERN stack development. I love tackling CTF challenges and building secure systems. I'm part of Pookie Bears, a CTF team ranked in the top 50 in India on CTFtime.
            </p>
            <p className="intro-description">
              Along with security, I enjoy creating full-stack web applications using the MERN stack. Always open to new opportunities and learning in the tech space. Let's connect!
            </p>
            <div className="quick-links-container">
              <h3 className="quick-links-title">Quick Links</h3>
            </div>
          </div>
          <div className="quick-links-wrapper">
            <div className="quick-links">
              <a href="#" className="quick-link">
                <FiFileText size={14} /> Resume <FiExternalLink size={14} />
              </a>
              <a href="#" className="quick-link">
                <FaBook /> Blog <FiExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>



        <section className="skills-section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills-table">

            <div className="skill-row">
              <div className="skill-row-label">Programming</div>
              <div className="skill-row-icons">
                <div className="skill-icon-item">
                  <SiJavascript color="#F7DF1E" size={36} />
                  <span>JavaScript</span>
                </div>
                <div className="skill-icon-item">
                  <SiPython color="#3776AB" size={36} />
                  <span>Python</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://icon.icepanel.io/Technology/svg/Java.svg" alt="Java" className="skill-img-icon" style={{ transform: 'scale(1.3)' }} />
                  <span>Java</span>
                </div>
                <div className="skill-icon-item">
                  <SiC color="#A8B9CC" size={36} />
                  <span>C</span>
                </div>
              </div>
            </div>

            <div className="skill-row">
              <div className="skill-row-label">Web</div>
              <div className="skill-row-icons">
                <div className="skill-icon-item">
                  <SiReact color="#61DAFB" size={36} />
                  <span>React</span>
                </div>
                <div className="skill-icon-item">
                  <SiNodedotjs color="#339933" size={36} />
                  <span>Node.js</span>
                </div>
                <div className="skill-icon-item">
                  <SiMongodb color="#47A248" size={36} />
                  <span>MongoDB</span>
                </div>
                <div className="skill-icon-item">
                  <SiTailwindcss color="#06B6D4" size={36} />
                  <span>Tailwind</span>
                </div>
                <div className="skill-icon-item">
                  <SiPostman color="#FF6C37" size={36} />
                  <span>Postman</span>
                </div>
              </div>
            </div>

            <div className="skill-row">
              <div className="skill-row-label">Security</div>
              <div className="skill-row-icons">
                <div className="skill-icon-item">
                  <FaFlag color="#E53935" size={32} />
                  <span>CTF</span>
                </div>
                <div className="skill-icon-item">
                  <FaGlobe color="#42A5F5" size={32} />
                  <span>OSINT</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Wireshark_icon_new.png" alt="Wireshark" className="skill-img-icon" />
                  <span>Wireshark</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/BurpSuite_logo.svg" alt="Burp Suite" className="skill-img-icon" />
                  <span>Burp Suite</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_nmap.png" alt="Nmap" className="skill-img-icon" />
                  <span>Nmap</span>
                </div>
                <div className="skill-icon-item">
                  <img src="https://www.kali.org/tools/ffuf/images/ffuf-logo.svg" alt="ffuf" className="skill-img-icon" />
                  <span>ffuf</span>
                </div>
              </div>
            </div>

            <div className="skill-row">
              <div className="skill-row-label">Data Science</div>
              <div className="skill-row-icons">
                <div className="skill-icon-item">
                  <SiPandas color="#150458" size={36} className="pandas-icon" />
                  <span>Pandas</span>
                </div>
                <div className="skill-icon-item">
                  <SiNumpy color="#4DABCF" size={36} />
                  <span>NumPy</span>
                </div>
                <div className="skill-icon-item">
                  <SiJupyter color="#F37626" size={36} />
                  <span>Jupyter</span>
                </div>
                <div className="skill-icon-item">
                  <SiTensorflow color="#FF6F00" size={36} />
                  <span>TensorFlow</span>
                </div>
                <div className="skill-icon-item">
                  <SiScikitlearn color="#F7931E" size={36} />
                  <span>Scikit-learn</span>
                </div>
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
              link="https://finance-tracker-app-three.vercel.app/"
              number="01"
              tags={["React", "Node.js", "MongoDB"]}
            />
            <ProjectCard
              title="Image Generator"
              description="An image generator that uses Cloudflare Workers AI to generate images and the Hono framework for the JavaScript runtime"
              link="https://image-generator-smoky.vercel.app/"
              number="02"
              tags={["Hono", "Cloudflare", "Workers AI"]}
            />
            <ProjectCard
              title="SYNC"
              description="A real-time chat app built with the MERN stack, using GraphQL subscriptions and WebSockets for live messaging." link="https://sync-beta-blue.vercel.app/"
              number="03"
              tags={["React", "GraphQL", "Node.js", "MongoDB"]}
            />
            <ProjectCard
              title="WhatsApp Bot"
              description="A Node.js WhatsApp group bot with command-based utilities for automating everyday tasks." link="https://github.com/anshulnegi09/WhatsApp-Bot"
              number="04"
              tags={["JavaScript", "Node.js", "whatsapp-web.js"]}
            />
          </div>
        </section>

        <section className="about-section" id="about">
          <h2 className="section-title">About</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">M.Tech Decision Sciences and Engineering</h3>
                <p className="timeline-subtitle">IIT (BHU) Varanasi · 2026–28</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">B.Tech Computer Science and Information Technology</h3>
                <p className="timeline-subtitle">ITER, SOA University · 2021–25</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">High School</h3>
                <p className="timeline-subtitle">Doon International School, Dehradun</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <h2 className="section-title">Contact</h2>

          <div className="contact-layout">
            {/* Left: info + socials */}
            <div className="contact-left">
              <div className="contact-info">
                <a href="mailto:negianshul.work@gmail.com" className="contact-link">
                  <FiMail className="contact-icon" />
                  <span>negianshul.work@gmail.com</span>
                </a>
                <a href="tel:+918077721214" className="contact-link">
                  <FiPhone className="contact-icon" />
                  <span>+91 80777 21214</span>
                </a>
              </div>
              <div className="social-links-grid">
                <a href="https://www.linkedin.com/in/anshulnegi09/" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
                <a href="https://github.com/anshulnegi09/" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="GitHub"><FaGithub size={22} /></a>
                <a href="http://x.com/hiAnshul" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="X / Twitter"><FaXTwitter size={22} /></a>
              </div>
            </div>

            {/* Right: mail form */}
            <form className="contact-form" onSubmit={handleContactSubmit} ref={formRef}>
              <div className="contact-form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-name">Name</label>
                  <input
                    id="cf-name"
                    name="from_name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    required
                    value={contactForm.name}
                    onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    name="reply_to"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    required
                    value={contactForm.email}
                    onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="What's on your mind?"
                  rows={5}
                  required
                  value={contactForm.message}
                  onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button
                type="submit"
                className={`form-submit form-submit--${contactStatus}`}
                disabled={contactStatus === 'sending'}
              >
                {contactStatus === 'sending' && <><FiLoader className="spin" size={14} /> Sending…</>}
                {contactStatus === 'sent'    && <><FiCheck size={14} /> Message Sent!</>}
                {contactStatus === 'error'   && <><FiAlertCircle size={14} /> Failed — try again</>}
                {contactStatus === 'idle'    && <><FiSend size={14} /> Send Message</>}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
