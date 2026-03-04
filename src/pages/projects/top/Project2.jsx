import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project2() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['problem', 'Problem'],
        ['solution', 'Solution'],
        ['tech', 'Tech Stack'],
        ['results', 'Results'],
        ['next', 'Next Improvements'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">PROJECT 2 — SMART PERSONAL FINANCE DASHBOARD</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        A lightweight dashboard that helps users understand spending patterns, detect unusual transactions, and set
        monthly budgets. This is demo content — replace with your real project details anytime.
      </p>

      <h2 id="problem">Problem</h2>
      <ul>
        <li>Transactions are messy and inconsistent (different merchant names, categories, formats).</li>
        <li>People struggle to see “where the money went” and what to reduce next month.</li>
      </ul>

      <h2 id="solution">Solution</h2>
      <ul>
        <li>Clean + normalize transactions.</li>
        <li>Auto-categorize expenses and summarize by week/month.</li>
        <li>Highlight anomalies (spikes) and recurring subscriptions.</li>
      </ul>

      <h2 id="tech">Tech Stack</h2>
      <ul>
        <li>Frontend: React + CSS</li>
        <li>Backend: Flask (REST API)</li>
        <li>Database: MySQL</li>
        <li>Data: Pandas for cleaning + aggregation</li>
      </ul>

      <h2 id="results">Results</h2>
      <ul>
        <li>Category summaries update instantly with filters.</li>
        <li>Detects top 5 subscriptions and “unusual” spends per month.</li>
        <li>Exports CSV report for budgeting reviews.</li>
      </ul>

      <h2 id="next">Next Improvements</h2>
      <ul>
        <li>Add authentication + multi-user support.</li>
        <li>Better categorization using embeddings or a small ML model.</li>
        <li>Deploy on Vercel (frontend) + Render/Fly.io (API).</li>
      </ul>

      <h2 id="links">Links</h2>
      <ul>
        <li>
          GitHub: <a href="https://github.com/yourusername/project2">https://github.com/yourusername/project2</a>
        </li>
        <li>
          Live Demo: <a href="#">(add your link)</a>
        </li>
      </ul>
    </ProjectLayout>
  )
}
