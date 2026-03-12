import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project1() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['problem', 'Problem'],
        ['solution', 'Solution'],
        ['features', 'Key Features'],
        ['tech', 'Tech Stack'],
        ['workflow', 'User Flow'],
        ['impact', 'Why It Matters'],
        ['next', 'Next Improvements'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">PrepAA: AI Mock Interview Assistant</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        PrepAA is a web-based AI mock interview assistant built to make interview preparation more practical,
        interactive, and repeatable. Instead of relying only on static question lists, the platform gives users a
        guided interview style experience where they can practise answering role relevant questions.
      </p>
      <p>
        The project focuses on helping students, fresh graduates, and job seekers prepare with more structure before
        real interviews. It turns preparation into an active workflow: choose a target role, start a mock session,
        respond to prompts, and review feedback to identify weak areas before the actual interview.
      </p>
      <br />

      <h2 id="problem">Problem</h2>
      <p>
        Interview preparation is often inconsistent and difficult to personalise. Many candidates depend on generic
        online question banks, scattered notes, or one-time peer practice. That usually creates three gaps:
      </p>
      <ul>
        <li>Practice is not realistic enough to simulate interview pressure or flow.</li>
        <li>Users do not get immediate feedback on the quality of their answers.</li>
        <li>Preparation is hard to repeat consistently across different roles or topics.</li>
      </ul>
      <p>
        PrepAA addresses this by providing an accessible, browser-based assistant that encourages regular practice with a more interview-like experience.
      </p>
      <br />

      <h2 id="solution">Solution</h2>
      <p>
        The solution is an AI-powered mock interview workflow that helps users practise more deliberately. PrepAA
        supports interview preparation by generating relevant prompts, guiding the user through a mock session, and
        returning feedback that helps improve answer quality over time.
      </p>
      <p>
        This makes the experience more useful than simply reading model answers. Users can actively rehearse,
        understand where they need improvement, and return for repeated practice until they feel more prepared.
      </p>
      <br />

      <h2 id="features">Key Features</h2>
      <ul>
        <li>AI-assisted mock interview sessions for structured practice.</li>
        <li>Role-focused question generation to keep preparation relevant.</li>
        <li>Voice-based interaction using browser speech recognition and text-to-speech.</li>
        <li>Immediate feedback that helps users refine clarity, structure, and confidence.</li>
        <li>Session history with interview transcripts and feedback.</li>
        <li>Simple web interface that makes interview practice easy to start and repeat.</li>
      </ul>
      <br />

      <h2 id="tech">Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React 19, Vite, React Router</li>
        <li><strong>Styling:</strong> Tailwind CSS</li>
        <li><strong>Authentication:</strong> Clerk</li>
        <li><strong>Database:</strong> Supabase (PostgreSQL)</li>
        <li><strong>AI Model:</strong> Groq API for generating interview questions and feedback</li>
        <li><strong>Voice Interaction:</strong> Browser Web Speech API (SpeechRecognition & SpeechSynthesis)</li>
        <li><strong>Resume Parsing:</strong> pdfjs-dist for client-side PDF text extraction</li>
        <li><strong>Deployment:</strong> Vercel</li>
      </ul>
      <br />

      <h2 id="workflow">User Flow</h2>
      <ol>
        <li>The user signs in and opens the PrepAA dashboard.</li>
        <li>The user selects a target job role for the mock interview.</li>
        <li>An optional resume upload allows the system to personalise interview questions.</li>
        <li>The AI generates questions and conducts a voice-based mock interview session.</li>
        <li>The user answers each question using the microphone.</li>
        <li>The user can review past sessions and repeat practice.</li>
      </ol>
      <br />

      <h2 id="impact">Why It Matters</h2>
      <p>
        PrepAA turns vague interview preparation into a repeatable training loop. It helps users move beyond passive
        reading and into active rehearsal, which is usually where confidence and communication improve the most.
      </p>
      <ul>
        <li>Supports more consistent interview practice.</li>
        <li>Helps users identify weak answers before real interviews.</li>
        <li>Improves confidence through repetition and feedback.</li>
        <li>Makes interview preparation more accessible for independent learners.</li>
      </ul>
      <br />

      <h2 id="next">Next Improvements</h2>
      <ul>
        <li>Add detailed scoring dashboards to track improvement.</li>
        <li>Expand personalisation with company-specific interview modes.</li>
        <li>Introduce AI coaching tips during practice sessions.</li>
        <li>Add more job roles and technical interview categories.</li>
      </ul>
      <br />

      <div className="project-links-icons" id="links">
        <a
          href="https://github.com/Gladnx/ai-interview-preparation-assistant"
          target="_blank"
          rel="noreferrer"
          className="project-link-icon"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://prepaa.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="project-link-icon"
          aria-label="Website"
        >
          <i className="fa-solid fa-globe"></i>
        </a>
      </div>
    </ProjectLayout>
  )
}