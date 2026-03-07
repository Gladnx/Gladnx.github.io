import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project3() {
  return (
    <ProjectLayout
      afterBackSpace={220}
      toc={[
        ['overview', 'Overview'],
        ['problem', 'Problem'],
        ['idea', 'Project Idea / Workflow'],
        ['features', 'Key Features'],
        ['tech', 'Tech Stack'],
        ['architecture', 'How It Works'],
        ['implementation', 'Implementation Details'],
        ['future', 'Future Improvements']
      ]}
    >
      <h3 id='heading' className="specific-heading">AI CODE LOGIC EXPLAINER</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        AI Code Logic Explainer is an intelligent developer support tool built to help
        users understand code more easily. Instead of only showing raw source code,
        the system analyses a given snippet and converts the underlying logic into a
        clear, human-readable explanation. The main goal of the project is to reduce
        the time needed to understand unfamiliar code, especially for students,
        beginners, and developers working with complex functions or new codebases.
      </p>
      <p>
        The project combines an interactive coding interface with AI-based explanation
        generation. Users can paste or write code inside the editor, submit it for
        analysis, and receive a structured explanation that makes the code easier to
        read, learn, debug, and document.
      </p>

      <h2 id="problem">Problem</h2>
      <p>
        Reading code is often more difficult than writing it. Many learners struggle
        when they see large functions, unfamiliar syntax, or logic written by someone
        else. Even experienced developers can lose time trying to understand legacy
        code, nested conditions, loops, or algorithmic steps before they can modify
        or debug it.
      </p>
      <p>
        Traditional code editors help with writing and formatting code, but they do
        not always explain <em>why</em> the code works or what each part is doing in
        plain language. This creates a learning gap for beginners and slows down
        productivity for developers who need fast understanding of existing code.
      </p>

      <h2 id="idea">Project Idea / Workflow</h2>
      <p>
        The idea behind this project is to create a bridge between raw source code
        and natural language understanding. Instead of forcing the user to manually
        decode every line, the system acts like an intelligent explainer that reads
        the code and translates its logic into simple technical commentary.
      </p>
      <ul>
        <li>User writes or pastes code into the editor.</li>
        <li>The code is sent to an AI model for analysis.</li>
        <li>The model interprets the logic, structure, and purpose of the snippet.</li>
        <li>
          A readable explanation is generated and displayed in formatted output.
        </li>
        <li>
          The explanation helps the user understand flow, conditions, loops,
          functions, and overall intent more quickly.
        </li>
      </ul>

      <h2 id="features">Key Features</h2>
      <ul>
        <li>
          <strong>Interactive Code Editor:</strong> Users can input code in a clean
          editor environment for a more realistic development experience.
        </li>
        <li>
          <strong>AI-Powered Explanation:</strong> The application uses AI to analyse
          code and describe its logic in natural language.
        </li>
        <li>
          <strong>Readable Output Format:</strong> Explanations are presented in a
          structured and user-friendly way, making them easier to follow.
        </li>
        <li>
          <strong>Learning Support:</strong> The tool is useful for students trying to
          understand concepts, syntax, and algorithmic thinking.
        </li>
        <li>
          <strong>Developer Productivity:</strong> It can also help developers review
          unfamiliar code more efficiently during debugging or maintenance.
        </li>
      </ul>

      <h2 id="tech">Tech Stack</h2>
      <ul>
        <li>
          <strong>Frontend:</strong> HTML, CSS, JavaScript, Tailwind CSS, React
        </li>
        <li>
          <strong>AI / API Integration:</strong> Google Gemini AI model integration
        </li>
        <li>
          <strong>Build Tooling:</strong> Vite, Postman, Vercel
        </li>
                <li>
          <strong>Version Control:</strong> Github
        </li>
      </ul>

      <h2 id="architecture">How It Works</h2>
      <p>
        The project follows a simple but effective flow. On the frontend, the user
        interacts with a modern editor interface where code can be entered and
        reviewed comfortably. Once the user requests an explanation, the code is
        passed to an AI-powered analysis layer.
      </p>
      <p>
        The AI model processes the snippet by identifying programming constructs such
        as variables, conditions, loops, functions, and logical flow. It then returns
        a human-readable explanation describing what the code is doing and how the
        logic progresses from one part to another.
      </p>
      <p>
        Finally, the generated explanation is rendered on the interface in formatted
        Markdown so the output is easier to read than plain raw text.
      </p>

      <h2 id="implementation">Implementation Details</h2>
      <p>
        A key strength of the project is its practical implementation. The Monaco
        Editor provides a professional code editing experience similar to modern IDEs,
        which improves usability and makes the project feel closer to a real
        developer tool rather than a simple text input box.
      </p>
      <p>
        The use of React supports a modular frontend structure, making it easier to
        maintain separate components for the editor, input handling, API calls, and
        output rendering. Markdown rendering improves the presentation quality of the
        explanations, which is important because readability is one of the main goals
        of the system.
      </p>
      <p>
        Environment-based configuration is also important in this project because API
        keys and related credentials should not be hardcoded directly into the
        application. This reflects a better development practice for deploying AI web
        applications securely.
      </p>

      <p>
        This project is valuable because it focuses on one of the most common pain
        points in software development: understanding existing code. It shows how AI
        can be used not just for code generation, but also for code interpretation,
        learning, and developer assistance.
      </p>
      <p>
        From an academic and portfolio perspective, the project demonstrates skills in
        frontend development, API integration, AI-assisted application design, and
        user-focused problem solving. It also presents a strong real-world use case,
        because code understanding is relevant in education, onboarding, debugging,
        and technical documentation.
      </p>

      <h2 id="future">Future Improvements</h2>
      <ul>
        <li>Add support for multiple programming languages with language-specific explanations.</li>
        <li>Break explanations into line-by-line or block-by-block analysis.</li>
        <li>Include complexity insights such as time and space complexity estimation.</li>
        <li>Add debugging suggestions and code improvement recommendations.</li>
        <li>Allow users to export explanations for learning notes or documentation.</li>
        <li>Introduce example test cases to show how the code behaves with input/output.</li>
      </ul>

      
      <div className="project-links-icons" id='links'>
        <a href="https://github.com/Gladnx/AI-code-logic-explainer.git" target="_blank" rel="noreferrer" className="project-link-icon" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://ai-code-logic-explainer.vercel.app" target="_blank" rel="noreferrer" className="project-link-icon" aria-label="Website">
          <i className="fa-solid fa-globe"></i>
        </a>
      </div>
      <br />
     
    </ProjectLayout>
    
  )
}

