import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project8() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['data', 'Data'],
        ['methods', 'Methods'],
        ['insights', 'Insights'],
        ['deliverables', 'Deliverables'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">PROJECT 8 — WEB TRAFFIC ANALYTICS</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        Demo project: analysed website sessions to understand acquisition channels, landing page performance, and
        conversion funnels.
      </p>

      <h2 id="data">Data</h2>
      <ul>
        <li>Events: page_view, add_to_cart, checkout, purchase</li>
        <li>Dimensions: source, medium, device, country</li>
      </ul>

      <h2 id="methods">Methods</h2>
      <ul>
        <li>Sessionisation + funnel drop-off calculation</li>
        <li>Cohort analysis for retention</li>
        <li>A/B test summary (if available)</li>
      </ul>

      <h2 id="insights">Insights</h2>
      <ul>
        <li>One channel drove high traffic but low conversion (quality issue).</li>
        <li>Mobile conversion lagged due to slow checkout (demo claim).</li>
      </ul>

      <h2 id="deliverables">Deliverables</h2>
      <ul>
        <li>Funnel report + recommendations</li>
        <li>Dashboard with channel + landing page filters</li>
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

