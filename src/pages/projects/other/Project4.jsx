import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project4() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['dataset', 'Dataset'],
        ['analysis', 'Analysis'],
        ['insights', 'Key Insights'],
        ['dashboard', 'Dashboard'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">PROJECT 4 — SALES PERFORMANCE ANALYSIS</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        Demo project: cleaned a retail sales dataset and built a KPI dashboard to track revenue, conversion rate, and
        regional performance.
      </p>

      <h2 id="dataset">Dataset</h2>
      <ul>
        <li>Transactions: date, region, product, price, quantity</li>
        <li>Optional joins: campaigns, customer segments</li>
      </ul>

      <h2 id="analysis">Analysis</h2>
      <ul>
        <li>Data cleaning: missing values, duplicates, inconsistent categories</li>
        <li>Feature engineering: month, quarter, basket size, promo flag</li>
        <li>Trends: MoM growth, top categories, seasonal peaks</li>
      </ul>

      <h2 id="insights">Key Insights</h2>
      <ul>
        <li>Top 20% SKUs contributed the majority of revenue (Pareto pattern).</li>
        <li>Promo periods increased volume but sometimes reduced profit margin.</li>
        <li>One region consistently underperformed due to low repeat purchases.</li>
      </ul>

      <h2 id="dashboard">Dashboard</h2>
      <ul>
        <li>KPIs: Revenue, Profit, Avg Order Value, Repeat Rate</li>
        <li>Filters: Region, Category, Date range</li>
        <li>Charts: Trend line, Top products bar chart, Heatmap</li>
      </ul>

      <h2 id="links">Links</h2>
      <ul>
        <li>
          GitHub: <a href="https://github.com/yourusername/project4">https://github.com/yourusername/project4</a>
        </li>
        <li>
          Report: <a href="#">(add link)</a>
        </li>
      </ul>
    </ProjectLayout>
  )
}
