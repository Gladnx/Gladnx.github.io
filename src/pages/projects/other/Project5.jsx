import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project5() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['problem', 'Problem'],
        ['data', 'Data'],
        ['model', 'Model'],
        ['results', 'Results'],
        ['improvements', 'Improvements'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">PROJECT 5 — COMPUTER VISION IMAGE CLASSIFIER</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        Demo project: trained an image classifier to identify common object categories. Focused on a clean pipeline:
        preprocessing, training, evaluation, and error analysis.
      </p>

      <h2 id="problem">Problem</h2>
      <ul>
        <li>Classify images into N categories with good generalization.</li>
        <li>Handle class imbalance and noisy labels.</li>
      </ul>

      <h2 id="data">Data</h2>
      <ul>
        <li>Train/val/test split</li>
        <li>Augmentations: resize, crop, flip, color jitter</li>
      </ul>

      <h2 id="model">Model</h2>
      <ul>
        <li>Baseline: small CNN</li>
        <li>Improved: transfer learning (e.g., ResNet/MobileNet)</li>
        <li>Loss: cross-entropy + class weights</li>
      </ul>

      <h2 id="results">Results</h2>
      <ul>
        <li>Accuracy improved with transfer learning (demo claim).</li>
        <li>Confusion matrix used to identify frequent failure cases.</li>
      </ul>

      <h2 id="improvements">Improvements</h2>
      <ul>
        <li>Add Grad-CAM visual explanations.</li>
        <li>Hyperparameter tuning + better augmentation strategy.</li>
        <li>Export model to ONNX and deploy as an API.</li>
      </ul>

      <h2 id="links">Links</h2>
      <ul>
        <li>
          GitHub: <a href="https://github.com/Gladnx">https://github.com/Gladnx</a>
        </li>
        <li>
          Demo: <a href="#">(add link)</a>
        </li>
      </ul>
    </ProjectLayout>
  )
}

