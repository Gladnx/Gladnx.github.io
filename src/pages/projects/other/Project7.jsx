import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project7() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['usecase', 'Use Case'],
        ['prompting', 'Prompting Strategy'],
        ['safety', 'Safety'],
        ['evaluation', 'Evaluation'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">PROJECT 7 — GENERATIVE AI STUDY ASSISTANT</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        Demo project: a study assistant that can summarise notes, generate flashcards, and create practice questions from
        uploaded text.
      </p>

      <h2 id="usecase">Use Case</h2>
      <ul>
        <li>Turn lecture notes into concise summaries</li>
        <li>Generate Q&A for revision</li>
        <li>Build quick flashcards</li>
      </ul>

      <h2 id="prompting">Prompting Strategy</h2>
      <ul>
        <li>Structured prompts with section headings</li>
        <li>Few-shot examples for consistent formatting</li>
        <li>Optional “strict mode” to reduce hallucinations</li>
      </ul>

      <h2 id="safety">Safety</h2>
      <ul>
        <li>Refuses to provide harmful instructions</li>
        <li>Encourages citations + verification for factual answers</li>
      </ul>

      <h2 id="evaluation">Evaluation</h2>
      <ul>
        <li>User feedback on usefulness and clarity</li>
        <li>Consistency checks on format + correctness (demo approach)</li>
      </ul>

      <h2 id="links">Links</h2>
      <ul>
        <li>
          GitHub: <a href="https://github.com/Gladnx">https://github.com/Gladnx</a>
        </li>
      </ul>
    </ProjectLayout>
  )
}

