import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project9() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['goal', 'Goal'],
        ['pipeline', 'Pipeline'],
        ['features', 'Key Features'],
        ['limits', 'Limitations'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">PROJECT 9 — RAG CHATBOT (DEMO)</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        Demo project: a Retrieval-Augmented Generation chatbot that answers questions using your own documents.
      </p>

      <h2 id="goal">Goal</h2>
      <ul>
        <li>Reduce hallucinations by grounding responses in retrieved sources.</li>
        <li>Support fast semantic search across many docs.</li>
      </ul>

      <h2 id="pipeline">Pipeline</h2>
      <ol>
        <li>Split documents into chunks</li>
        <li>Create embeddings</li>
        <li>Store vectors in a vector database</li>
        <li>Retrieve top-k chunks per question</li>
        <li>Generate an answer using retrieved context</li>
      </ol>

      <h2 id="features">Key Features</h2>
      <ul>
        <li>Source citations (chunk IDs / document names)</li>
        <li>Conversation memory for follow-up questions</li>
        <li>Simple web UI (demo)</li>
      </ul>

      <h2 id="limits">Limitations</h2>
      <ul>
        <li>Quality depends on chunking strategy + embedding model.</li>
        <li>Needs evaluation for correctness on your domain tasks.</li>
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

