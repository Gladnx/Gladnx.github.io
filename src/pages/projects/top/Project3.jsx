import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project3() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['goal', 'Goal'],
        ['data', 'Data'],
        ['approach', 'Approach'],
        ['evaluation', 'Evaluation'],
        ['results', 'Results'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">PROJECT 3 — PRODUCT RECOMMENDER (SIMILARITY SEARCH)</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        A demo recommender that finds similar products using vector embeddings and approximate nearest neighbor search.
        This page is formatted like Project 1 with a Table of Contents.
      </p>

      <h2 id="goal">Goal</h2>
      <ul>
        <li>Given a product, retrieve top-N similar products quickly.</li>
        <li>Compare exact search vs approximate search trade-offs.</li>
      </ul>

      <h2 id="data">Data</h2>
      <ul>
        <li>Input: product metadata (title, category, description) + user interactions.</li>
        <li>Embeddings: precomputed dense vectors (e.g., Sentence Transformers) — demo placeholder.</li>
      </ul>

      <h2 id="approach">Approach</h2>
      <ul>
        <li>Normalize embeddings for cosine similarity.</li>
        <li>Index vectors using FAISS (exact baseline) and HNSW (fast ANN).</li>
        <li>Expose endpoints for query + evaluation.</li>
      </ul>

      <h2 id="evaluation">Evaluation</h2>
      <ul>
        <li>Recall@10 against exact baseline.</li>
        <li>Query latency and index build time.</li>
      </ul>

      <h2 id="results">Results</h2>
      <ul>
        <li>HNSW returns near-identical results with significantly lower latency (demo claim).</li>
        <li>Supports scaling to larger catalogs with acceptable recall.</li>
      </ul>

      <h2 id="links">Links</h2>
      <ul>
        <li>
          GitHub: <a href="https://github.com/yourusername/project3">https://github.com/yourusername/project3</a>
        </li>
        <li>
          Docs: <a href="#">(add your link)</a>
        </li>
      </ul>
    </ProjectLayout>
  )
}
