import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import {
  SiAnaconda,
  SiCss,
  SiDocker,
  SiFlask,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiOpenjdk,
  SiPandas,
  SiPlotly,
  SiPostman,
  SiReact,
  SiScikitlearn,
  SiStreamlit,
  SiTailwindcss,
  SiTensorflow,
  SiJupyter,
  SiApachespark,
  SiPython
} from 'react-icons/si'
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi'

import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import GoUpButton from '../components/GoUpButton.jsx'

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [alert, setAlert] = useState({ text: '', type: '' })
  const formRef = useRef(null)

  const colorBoxes = useMemo(() => Array.from({ length: 400 }), [])

  useEffect(() => {
    // EmailJS init
    try {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
    } catch {
      // ignore
    }

    // Scroll reveal (replaces your on-scroll animation logic)
    const elements = document.querySelectorAll(
      '.fade-in, .slide-in-top, .slide-in-right, .skill, .shrinkInAndOut, .project-item, .filter-btn, .slide-in-left'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            entry.target.classList.remove('hidden')

            // If you only want the animation once (e.g., hero/about), stop observing after first reveal
            if (entry.target.classList.contains('reveal-once')) {
              observer.unobserve(entry.target)
            }
          } else {
            // For elements that should re-animate on scroll, toggle back to hidden
            if (!entry.target.classList.contains('reveal-once')) {
              entry.target.classList.remove('visible')
              entry.target.classList.add('hidden')
            }
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

    const topProjects = useMemo(
    () => [
      {
        id: 1,
        title: 'AI-Enabled Onion Storage Grading System',
        description:
          'Designed an electromechanical + AI workflow to grade onion quality and support better storage decisions, reducing spoilage risk and post-harvest loss.',
        github: 'https://github.com/yourusername/project1',
        website: 'https://your-project1-demo-link.com',
        learnMore: '/projects/project-1',
        image: '/images/sample-project-image.jpg',
        skills: [
          { name: 'Python', Icon: SiPython },
          { name: 'OpenCV / CV', Icon: SiJupyter },
          { name: 'TensorFlow', Icon: SiTensorflow }
        ]
      },
      {
        id: 2,
        title: 'Smart Personal Finance Dashboard',
        description:
          'Built a dashboard to clean transaction data, summarize spending behavior, and flag unusual activity with category-level insights and reporting.',
        github: 'https://github.com/yourusername/project2',
        website: 'https://your-project2-demo-link.com',
        learnMore: '/projects/project-2',
        image: '/images/sample-project-image.jpg',
        skills: [
          { name: 'React', Icon: SiReact },
          { name: 'Flask', Icon: SiFlask },
          { name: 'MySQL', Icon: SiMysql },
          { name: 'Pandas', Icon: SiPandas }
        ]
      },
      {
        id: 3,
        title: 'Product Recommender (Similarity Search)',
        description:
          'Implemented a similarity-search recommender using vector representations and ANN indexing concepts to retrieve related products with low latency.',
        github: 'https://github.com/yourusername/project3',
        learnMore: '/projects/project-3',
        image: '/images/sample-project-image.jpg',
        skills: [
          { name: 'Python', Icon: SiPython },
          { name: 'NumPy', Icon: SiNumpy },
          { name: 'Scikit-learn', Icon: SiScikitlearn }
        ]
      }
    ],
    []
  )

  const otherProjects = useMemo(
    () => [
      {
        titleTop: 'PROJECT 4',
        category: 'data-analysis',
        img: '/images/image.png',
        title: 'Sales Performance Analysis',
        description: 'Analyzed sales trends by region and product line to identify growth opportunities.',
        github: 'https://github.com/yourusername/project4',
        website: 'https://your-project4-demo-link.com',
        learnMore: '/projects/project-4'
      },
      {
        titleTop: 'PROJECT 5',
        category: 'machine-learning',
        img: '/images/image.png',
        title: 'Computer Vision Image Classifier',
        description: 'Built an image classification workflow to automate visual labeling with strong baseline accuracy.',
        github: 'https://github.com/yourusername/project5',
        learnMore: '/projects/project-5'
      },
      {
        titleTop: 'PROJECT 6',
        category: 'data-analysis',
        img: '/images/image.png',
        title: 'Customer Churn Exploratory Analysis',
        description: 'Explored customer behavior patterns to uncover churn drivers and retention opportunities.',
        github: 'https://github.com/yourusername/project6',
        website: 'https://your-project6-demo-link.com',
        learnMore: '/projects/project-6'
      },
      {
        titleTop: 'PROJECT 7',
        category: 'generative-ai',
        img: '/images/image.png',
        title: 'Generative AI Study Assistant',
        description: 'Created an AI study assistant to summarize content and generate revision-ready answers.',
        github: 'https://github.com/yourusername/project7',
        learnMore: '/projects/project-7'
      },
      {
        titleTop: 'PROJECT 8',
        category: 'data-analysis',
        img: '/images/image.png',
        title: 'Web Traffic Analytics',
        description: 'Tracked traffic and engagement metrics to identify funnel drop-offs and improve conversion.',
        github: 'https://github.com/yourusername/project8',
        learnMore: '/projects/project-8'
      },
      {
        titleTop: 'PROJECT 9',
        category: 'generative-ai',
        img: '/images/image.png',
        title: 'RAG Chatbot',
        description: 'Implemented a retrieval-augmented chatbot for context-grounded answers from documents.',
        github: 'https://github.com/yourusername/project9',
        learnMore: '/projects/project-9'
      }
    ],
    []
  )
  const filteredOtherProjects = useMemo(() => {
    if (activeFilter === 'all') return otherProjects
    return otherProjects.filter((p) => p.category === activeFilter)
  }, [activeFilter, otherProjects])

  async function onSubmit(e) {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const inputs = form.querySelectorAll('input, textarea')
    let allFilled = true
    inputs.forEach((input) => {
      if (!input.value) {
        allFilled = false
        input.classList.add('error')
      } else {
        input.classList.remove('error')
      }
    })

    if (!allFilled) {
      setAlert({ text: 'Please fill in all fields.', type: 'error' })
      setTimeout(() => setAlert({ text: '', type: '' }), 4000)
      return
    }

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
      setAlert({ text: 'Email sent successfully!', type: 'success' })
      form.reset()
    } catch (err) {
      setAlert({ text: 'Failed to send email. ' + String(err?.text || err?.message || err), type: 'error' })
    } finally {
      setTimeout(() => setAlert({ text: '', type: '' }), 4000)
    }
  }

  return (
    <>
      <Navbar />

      <section id="home">
        <div className="bgAnimation" id="bgAnimation">
          {colorBoxes.map((_, i) => (
            <div className="colorBox" key={i} />
          ))}
          <div className="backgroundAnim" />
        </div>

        <div className="info slide-in-top reveal-once">
          <h6>Hi, my name is</h6>
          <h1>GLADWIN GEORGE</h1>
          <h3>
            and I use <span className="blue-text">DATA</span> to <span className="highlight-text">solve problems,</span>{' '}
            <span className="highlight-text">deliver insights,</span> and
            <br />
            <span className="highlight-text">drive intelligent decisions.</span>
          </h3>
        </div>
      </section>

      <section id="about">
        <div className="aboutme shrinkInAndOut reveal-once">
          <img src="/images/home.png" alt="About" className="aboutme-image" />
          <div className="aboutme-text">
            <h2>About Me</h2>
            <p>
              I’m Gladwin George, an<span className="aboutme-highlight"> MSc Artificial Intelligence</span> student at <span className="aboutme-highlight">Lancaster University</span>, and a BTech graduate from SAGE University, Indore (India). I am passionate about solving real-world problems and exploring innovative ways to use Generative AI to make technology more helpful, accessible, and enjoyable. <br /> 

              My interests lie in <span className="aboutme-highlight">Intelligent systems</span>, <span className="aboutme-highlight">AI-driven applications</span>, and <span className="aboutme-highlight">practical problem solving</span>, where technology can meaningfully improve everyday experiences. I enjoy building solutions that combine creativity with technical thinking, particularly in areas involving data, machine learning, and modern development tools. <br />

              Alongside my studies, I volunteer at the <span className="aboutme-highlight">British Heart Foundation</span>, where I support community-driven initiatives and gain valuable experience working with diverse teams while contributing to meaningful social impact.
            </p>

            <a href="/files/Gladwin George Resume.pdf" className="btn" download>
              Resume
            </a>
            <a href="#contact" className="btn secondary-btn">
              Contact
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="shrinkInAndOut">Skills</h2>
        <div className="skills-container">
          {[
            {
              title: 'Programming & Development',
              items: [
                { name: 'Python', Icon: SiPython },
                { name: 'Java', Icon: SiOpenjdk },
                { name: 'JavaScript', Icon: SiJavascript },
                { name: 'HTML', Icon: SiHtml5 },
                { name: 'CSS', Icon: SiCss },
                { name: 'React', Icon: SiReact },
                { name: 'Tailwind CSS', Icon: SiTailwindcss },
                { name: 'Node.js', Icon: SiNodedotjs },
                { name: 'Flask', Icon: SiFlask },
                { name: 'MySQL', Icon: SiMysql }
              ]
            },
            {
              title: 'Data Science & Machine Learning',
              items: [
                { name: 'Excel', Icon: PiMicrosoftExcelLogoFill },
                { name: 'NumPy', Icon: SiNumpy },
                { name: 'Pandas', Icon: SiPandas },
                { name: 'Scikit-learn', Icon: SiScikitlearn },
                { name: 'TensorFlow', Icon: SiTensorflow },
                { name: 'Matplotlib', Icon: SiPlotly },
                { name: 'Apache Spark', Icon: SiApachespark },
                { name: 'Streamlit', Icon: SiStreamlit },
                { name: 'Jupyter Notebook', Icon: SiJupyter },
                { name: 'Google Colab', Icon: SiGooglecolab }
              ]
            },
            {
              title: 'Tools & DevOps',
              items: [
                { name: 'Git', Icon: SiGit },
                { name: 'GitHub', Icon: SiGithub },
                { name: 'GitLab', Icon: SiGitlab },
                { name: 'Docker', Icon: SiDocker },
                { name: 'Anaconda', Icon: SiAnaconda },
                { name: 'Postman', Icon: SiPostman }
              ]
            }
          ].map((s) => (
            <div className="skill skill-card" key={s.title}>
              <h3>{s.title}</h3>
              <div className="skill-icons">
                {s.items.map((item, idx) => (
                  <div className="skill-chip" key={`${item.name}-${idx}`}>
                    <item.Icon aria-hidden="true" />
                    <span className="skill-tooltip">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <div className="projects">
          <h1 className="heading shrinkInAndOut">MY PROJECTS</h1>

          <div className="project-list">
            {topProjects.map((project) => (
              <div className="project-item" key={project.id}>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <div className="project-skills">
                    {project.skills.map((tech) => (
                      <span
                        key={tech.name}
                        className="project-skills-btn project-skill-icon"
                        title={tech.name}
                        aria-label={tech.name}
                      >
                        <tech.Icon aria-hidden="true" />
                      </span>
                    ))}
                  </div>
                  <p>{project.description}</p>
                  <div className="button-container">
                    <div className="project-icon-links">
                      <a href={project.github} className="github_btn" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      {project.website && (
                        <a href={project.website} className="github_btn " target="_blank" rel="noreferrer">
                          <i className="fa-solid fa-globe"></i>
                        </a>
                      )}
                    </div>
                    <Link to={project.learnMore} className="learn-more-btn">
                      Learn More
                    </Link>
                  </div>
                </div>
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            ))}
          </div>

          <h1 className="heading2 shrinkInAndOut">OTHER PROJECTS</h1>

          <div className="filter-buttons">
            {[
              { key: 'all', label: 'All' },
              { key: 'data-analysis', label: 'DATA ANALYSIS' },
              { key: 'machine-learning', label: 'MACHINE LEARNING' },
              { key: 'generative-ai', label: 'GENERATIVE AI' }
            ].map((b) => (
              <button
                key={b.key}
                className={`filter-btn ${activeFilter === b.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(b.key)}
                data-category={b.key}
              >
                {b.label}
              </button>
            ))}
          </div>

          <div className="project-list2">
            {filteredOtherProjects.map((p, idx) => (
              <div className="other-projects-container" data-category={p.category} key={`${p.titleTop}-${idx}`}>
                <div className="project-title">{p.titleTop}</div>
                <img src={p.img} alt="Project" className="project-image2" />
                <div className="project-details">
                  <h3>{p.title}</h3>
                  <p className="other-project-description">{p.description}</p>
                  <div className="button-container">
                    <div className="project-icon-links">
                      <a href={p.github} className="github_btn" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      {p.website && (
                        <a href={p.website} className="github_btn " target="_blank" rel="noreferrer">
                          <i className="fa-solid fa-globe"></i>
                        </a>
                      )}
                    </div>
                    <Link to={p.learnMore} className="learn-more-btn learn-more-btn2">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h1 className="heading contact-heading slide-in-top">CONTACT ME</h1>
          <div className="contact-card">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                If you have any questions, feel free to reach out to me. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="social-contact">
                <a
                  href="https://www.linkedin.com/in/gladwin-george-"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Gladwin-George" target="_blank" rel="noreferrer" className="social-icon">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="mailto:your.gladwingeorge189@gmail.com" className="social-icon">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="contact-form">
              <form id="contact-form" ref={formRef} onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="user_name">Name</label>
                  <input type="text" id="user_name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5"></textarea>
                </div>
                <button type="submit">Send</button>
                <span id="alert-message" className={alert.type}>
                  {alert.text}
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <GoUpButton />
    </>
  )
}
