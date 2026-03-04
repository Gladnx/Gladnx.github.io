import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project6() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['data', 'Data'],
        ['pipeline', 'Pipeline'],
        ['findings', 'Findings'],
        ['visuals', 'Visualisations'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">PROJECT 6 — CUSTOMER CHURN EXPLORATORY ANALYSIS</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        Demo project: explored customer churn patterns and created a short report highlighting the strongest churn
        signals.
      </p>

      <h2 id="data">Data</h2>
      <ul>
        <li>Customer profile: tenure, contract type, plan, region</li>
        <li>Usage: sessions, spend, support tickets</li>
        <li>Target: churn (yes/no)</li>
      </ul>

      <h2 id="pipeline">Pipeline</h2>
      <ul>
        <li>Clean + encode categorical fields</li>
        <li>Handle outliers and missing values</li>
        <li>Segment analysis: churn by plan, region, tenure buckets</li>
      </ul>

      <h2 id="findings">Findings</h2>
      <ul>
        <li>Short-tenure users churn most frequently (early lifecycle risk).</li>
        <li>High support ticket volume correlates with churn.</li>
        <li>Annual contracts reduce churn compared to monthly (demo claim).</li>
      </ul>

      <h2 id="visuals">Visualisations</h2>
      <ul>
        <li>Churn by segment bar charts</li>
        <li>Tenure vs churn curve</li>
        <li>Correlation heatmap</li>
      </ul>

      <h2 id="links">Links</h2>
      <ul>
        <li>
          GitHub: <a href="https://github.com/yourusername/project6">https://github.com/yourusername/project6</a>
        </li>
      </ul>
    </ProjectLayout>
  )
}
