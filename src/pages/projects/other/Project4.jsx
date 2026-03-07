import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project4() {
  return (
    <ProjectLayout
      toc={[
        ['learnmore-title', 'Title and overview'],
        ['dataset', 'Dataset'],
        ['approach', 'Approach'],
        ['tech-stack', 'Tech Stack'],
        ['concepts', 'Concepts Used'],
        ['analysis', 'Analysis'],
        ['insights', 'Key Insights'],
        ['links', 'Links']
      ]}
    >

      <h3 id='learnmore-title' className="specific-heading">
        BASEL CLIMATE DATASET CLUSTERING ANALYSIS
      </h3>

      <br />

      <h2 id="overview">Overview</h2>

      <p>
        This project explores unsupervised machine learning techniques to discover hidden
        patterns in multivariate climate data collected in Basel, Switzerland. The analysis
        focuses on identifying natural groupings in meteorological observations without
        predefined labels.
      </p>

      <p>
        The workflow includes preprocessing, outlier detection, dimensionality reduction
        using PCA, and clustering using multiple algorithms including K-Means, DBSCAN,
        and Gaussian Mixture Models. The goal was to evaluate how different clustering
        methods capture structure within real-world climate data.
      </p>

      <h2 id="dataset">Dataset</h2>

      <p>
        The project uses the <strong>ClimateDataBasel.csv</strong> dataset which contains
        daily meteorological measurements collected in Basel. The dataset contains
        multiple environmental variables related to temperature, precipitation,
        humidity, pressure, sunshine duration, wind speed, and cloud cover.
      </p>

      <ul>
        <li>Dataset size: 1763 observations</li>
        <li>Total features: 18 climate variables</li>
        <li>No missing values detected</li>
        <li>No duplicate records found</li>
      </ul>
      <br />


      <h2 id="approach">Approach</h2>

      <p>
        The project followed a structured unsupervised learning workflow to prepare the
        climate dataset and improve the quality of clustering results. Since clustering
        does not rely on predefined labels, careful preprocessing was important to make
        sure the discovered groups reflected meaningful climate patterns rather than
        noise, scale differences, or redundant information.
      </p>

      <p>
        The analysis was carried out in Python using Jupyter Notebook, with libraries
        such as pandas and NumPy for data handling, matplotlib for visualization, and
        scikit-learn for preprocessing, dimensionality reduction, outlier detection,
        and clustering. The workflow moved step by step from raw data inspection to
        cleaned feature space, and then to model comparison.
      </p>

      <ul>
        <li>
          <strong>Initial data inspection:</strong> the dataset was first explored to
          understand its structure, feature types, and overall quality. This included
          checking the number of observations, reviewing climate variables, and testing
          for missing values or duplicate records. This step helped confirm that the
          dataset was complete and suitable for unsupervised analysis.
        </li>

        <li>
          <strong>Outlier detection using Isolation Forest:</strong> before clustering,
          unusual observations were identified using Isolation Forest. In climate data,
          extreme points can strongly affect distance-based algorithms such as K-Means
          and DBSCAN. Isolation Forest works by separating observations through random
          partitioning, making rare and isolated samples easier to detect. Removing or
          analysing these outliers separately helped reduce distortion in the cluster
          structure.
        </li>

        <li>
          <strong>Feature scaling with RobustScaler:</strong> the dataset contained
          variables measured on very different numerical ranges, such as temperature,
          pressure, rainfall, snowfall, and sunshine duration. Since clustering
          algorithms are sensitive to distance, scaling was necessary so that one large
          feature would not dominate the others. RobustScaler was chosen because it
          scales data using the median and interquartile range, making it more stable
          in the presence of outliers than standard normalization methods.
        </li>

        <li>
          <strong>Removing highly correlated variables:</strong> some climate variables
          carried overlapping information. For example, maximum, mean, and minimum
          temperature-related features may be strongly correlated. Keeping too many
          similar variables can introduce redundancy, reduce interpretability, and bias
          the clustering process. Correlation analysis was therefore used to identify
          highly related features, and selected redundant variables were removed to
          produce a cleaner and more informative feature set.
        </li>

        <li>
          <strong>Dimensionality reduction with PCA:</strong> after scaling and feature
          selection, Principal Component Analysis (PCA) was applied to reduce the
          dimensionality of the dataset while preserving most of its variation. PCA
          transforms the original variables into a smaller set of principal components
          that capture the main structure of the data. This helped simplify the feature
          space, reduce noise, and make the clustering results easier to visualize and
          interpret. The cumulative explained variance plot showed how many components
          were needed to retain most of the dataset's information.
        </li>

        <li>
          <strong>Clustering with multiple algorithms:</strong> instead of relying on a
          single method, the project compared several clustering approaches to better
          understand the structure of the climate data.
          <ul>
            <li>
              <strong>K-Means</strong> was used to partition the data into a fixed
              number of clusters based on distance to cluster centroids.
            </li>
            <li>
              <strong>DBSCAN</strong> was used to find dense groups of points and label
              sparse observations as noise, making it useful for irregular cluster
              shapes and anomaly detection.
            </li>
            <li>
              <strong>Gaussian Mixture Models (GMM)</strong> were used to model the data
              probabilistically, allowing softer boundaries between clusters and better
              representation of overlapping climate patterns.
            </li>
          </ul>
        </li>

        <li>
          <strong>Model comparison and interpretation:</strong> the clustering outputs
          were compared using evaluation metrics such as Silhouette Score,
          Davies–Bouldin Index, and Calinski–Harabasz Index. These metrics helped
          measure how compact and well separated the discovered clusters were. The final
          step was to visualize the results in PCA space and interpret what each
          clustering method revealed about the climate dataset.
        </li>
      </ul>

      <p>
        Overall, the approach combined preprocessing, feature engineering, and model
        comparison to build a reliable clustering pipeline. This made it possible to
        explore the hidden structure of the Basel climate dataset from different
        perspectives and understand how various unsupervised learning methods respond
        to real-world environmental data.
      </p>
      <br />


      <h2 id="tech-stack">Tech Stack</h2>

      <ul>
        <li>Python</li>
        <li>Jupyter Notebook</li>
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Matplotlib</li>
        <li>Scikit-learn</li>
      </ul>
      <br />


      <h2 id="concepts">Concepts Used</h2>

      <ul>
        <li>Unsupervised Machine Learning</li>
        <li>Clustering Algorithms (K-Means Clustering, DBSCAN Clustering, Gaussian Mixture Model)</li>
        <li>Dimensionality Reduction</li>
        <li>Outlier Detection</li>
        <li>Model Evaluation Metrics</li>
      </ul>
      <br />


      <h2 id="analysis">Analysis</h2>

      <p>
        To better understand the structure of the climate dataset, dimensionality
        reduction and clustering techniques were applied. Since the dataset contains
        multiple climate variables measured at different scales (such as temperature,
        precipitation, pressure, sunshine duration, and wind speed), it was important
        to first transform the data into a representation that highlights the most
        meaningful patterns.
      </p>

      <p>
        Principal Component Analysis (PCA) was used to reduce the dimensionality of
        the dataset while preserving as much of the original variance as possible.
        PCA transforms the original correlated variables into a smaller set of
        orthogonal components called principal components. These components capture
        the directions in which the data varies the most. Reducing dimensionality
        helps remove noise, improves clustering performance, and allows the results
        to be visualized more clearly in two-dimensional space.
      </p>

      <p>
        The cumulative explained variance plot was used to determine how many
        principal components were necessary to retain most of the dataset’s
        information. As shown in the plot, the first few components capture a large
        proportion of the variance in the climate data. Around six principal
        components were sufficient to preserve approximately 95% of the total
        variance, meaning that the majority of the dataset’s structure could be
        represented using far fewer dimensions than the original feature space.
      </p>

      <img
        src="/images/project details images/project4/pca_output.png"
        alt="PCA explained variance"
        className="learn_more_image"
      />

      <p className="image-caption">
        PCA cumulative explained variance showing how many principal components are
        required to retain most of the information in the dataset.
      </p>


      <h3>K-Means Clustering</h3>

      <p>
        After preprocessing and dimensionality reduction, K-Means clustering was
        applied to identify natural groupings in the climate observations. K-Means is
        a centroid-based clustering algorithm that partitions data points into a
        predefined number of clusters by minimizing the distance between points and
        their cluster centers.
      </p>

      <p>
        Different values of <strong>k</strong> were tested to determine the optimal
        number of clusters. Evaluation metrics such as the silhouette score were used
        to measure how well separated the clusters were. The analysis showed that
        <strong> k = 2</strong> provided the best separation of the climate data,
        indicating that the observations naturally form two broad groups.
      </p>

      <p>
        In the visualization below, each point represents a climate observation
        projected into two principal components (PC1 and PC2). The two clusters are
        represented by different colors, while the cluster centroids are marked at
        the center of each group. The separation suggests that the dataset contains
        two dominant climate patterns that differ in combinations of temperature,
        precipitation, and other environmental variables.
      </p>

      <img
        src="/images/project details images/project4/kmeans_output.png"
        alt="KMeans clustering"
        className="learn_more_image"
      />

      <p className="image-caption">
        K-Means clustering results visualized in PCA space with cluster centroids.
      </p>


      <h3>DBSCAN Clustering</h3>

      <p>
        To explore whether the dataset contains clusters with irregular shapes or
        varying densities, the Density-Based Spatial Clustering of Applications with
        Noise (DBSCAN) algorithm was also applied. Unlike K-Means, DBSCAN does not
        require specifying the number of clusters beforehand. Instead, it identifies
        clusters based on regions where data points are densely packed together.
      </p>

      <p>
        The algorithm was configured with parameters <strong>eps = 0.65</strong> and
        <strong>min_samples = 10</strong>. These parameters define the neighborhood
        radius and the minimum number of points required to form a dense region.
        DBSCAN grouped dense regions into clusters while labeling sparse or isolated
        observations as noise.
      </p>

      <p>
        The results show two main clusters as well as a number of points classified as
        noise. Approximately <strong>12% of the observations</strong> were identified
        as noise points, which may represent unusual or extreme weather conditions
        within the dataset. This demonstrates DBSCAN’s ability to detect anomalies
        that other algorithms might incorrectly force into clusters.
      </p>

      <img
        src="/images/project details images/project4/dbscan_output.png"
        alt="DBSCAN clustering"
        className="learn_more_image"
      />

      <p className="image-caption">
        DBSCAN clustering showing dense clusters and observations identified as noise.
      </p>


      <h3>Gaussian Mixture Model (GMM)</h3>

      <p>
        In addition to distance-based clustering methods, a probabilistic approach
        was explored using Gaussian Mixture Models (GMM). Unlike K-Means, which
        assigns each data point to a single cluster, GMM models the data as a mixture
        of multiple Gaussian distributions. Each observation has a probability of
        belonging to each cluster, allowing for more flexible cluster boundaries.
      </p>

      <p>
        Several model configurations were tested, and the final model used
        <strong> 7 components</strong> with a <strong>spherical covariance </strong>
        structure. This configuration allowed the model to capture more complex
        relationships in the dataset and represent overlapping clusters that may
        correspond to gradual transitions between climate conditions.
      </p>

      <p>
        When visualized in PCA space, the GMM results show multiple clusters that
        capture subtle variations in the climate observations. Compared with K-Means
        and DBSCAN, the GMM clusters appear more distributed, reflecting the
        probabilistic nature of the model and its ability to represent overlapping
        patterns.
      </p>

      <img
        src="/images/project details images/project4/gmm_output.png"
        alt="GMM clustering"
        className="learn_more_image"
      />

      <p className="image-caption">
        Gaussian Mixture Model clustering visualized in PCA space, showing multiple
        probabilistic clusters.
      </p>

      <br />

      <h2 id="insights">Key Insights</h2>

      <ul>
        <li>
          <strong>K-Means</strong> produced the clearest global separation of the
          dataset, indicating that the climate observations naturally form two
          dominant groups.
        </li>

        <li>
          <strong>DBSCAN</strong> achieved strong cluster compactness while also
          identifying noise points, which likely represent unusual or extreme climate
          observations.
        </li>

        <li>
          <strong>Gaussian Mixture Models</strong> captured more complex and
          overlapping cluster structures, suggesting that climate patterns may not
          always have strict boundaries.
        </li>

        <li>
          Comparing multiple clustering algorithms provided different perspectives on
          the same dataset, helping reveal both global patterns and finer variations
          in climate behavior.
        </li>
      </ul>

      <br />


      <div className="project-links-icons" id='links'>
        <a href="https://github.com/Gladnx/Basel-Climate-Dataset.git" target="_blank" rel="noreferrer" className="project-link-icon" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

    </ProjectLayout>
  )
}