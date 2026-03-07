import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project5() {
  return (
    <ProjectLayout
      toc={[
        ['title', 'Overview'],
        ['objective', 'Objective'],
        ['datasets', 'Datasets'],
        ['tech-stack', 'Tech Stack and Pipeline'],
        ['feature-extraction', 'Feature Extraction'],
        ['analysis', 'Analysis & Visualisation'],
        ['classification', 'Classification Results'],
        ['insights', 'Key Insights']
      ]}
    >
      <h3 id='title' className="specific-heading">
        IMAGE PROCESSING WITH DEEP NEURAL NETWORKS
      </h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        This project explores how pretrained deep neural networks can be used for image
        understanding without training a large model from scratch. Instead of building a
        custom convolutional network end to end, the project uses <strong>DINOv2</strong>
        , a pretrained vision transformer, to extract high-dimensional visual features from
        images and then analyses how well those learned representations separate different
        categories.
      </p>
      <p>
        The project includes two main experiments. The first uses a <strong>Cats vs Dogs </strong>
        dataset to study binary class separation, clustering behaviour, and simple linear
        classification on top of deep embeddings. The second uses the <strong>Oxford-IIIT Pets </strong>
        dataset to explore fine-grained multi-class image representation learning across pet
        breeds. Together, these experiments demonstrate how pretrained visual embeddings can
        support feature extraction, dimensionality reduction, clustering, and classification.
      </p>

      <h2 id="objective">Objective</h2>
      <p>
        The main goal of the project was to understand whether features extracted from a
        modern pretrained deep learning model are sufficiently informative to separate image
        classes with minimal additional training. Rather than focusing only on final accuracy,
        the project investigates the quality of the learned feature space itself.
      </p>
      <ul>
        <li>Extract semantic image features using a pretrained DINOv2 model.</li>
        <li>Visualise feature structure using PCA and t-SNE.</li>
        <li>Test whether unsupervised clustering can recover class structure.</li>
        <li>Evaluate how well simple classifiers perform on top of the extracted embeddings.</li>
        <li>Compare behaviour on binary and fine-grained multi-class image datasets.</li>
      </ul>

      <h2 id="datasets">Datasets</h2>
      <p>
        Two image datasets were used in this project to evaluate representation quality at
        different levels of difficulty.
      </p>
      <ul>
        <li>
          <strong>Cats vs Dogs:</strong> a binary image classification dataset used to test
          whether DINOv2 embeddings clearly separate two visually related animal categories.
        </li>
        <li>
          <strong>Oxford-IIIT Pets:</strong> a fine-grained dataset containing 37 pet breeds,
          used to analyse how well the learned features distinguish visually similar classes.
        </li>
      </ul>
      <p>
        These two datasets provide a useful contrast. The Cats vs Dogs task tests broad visual
        separation, while Oxford-IIIT Pets tests whether the same representation can capture
        more subtle inter-class differences such as fur pattern, face shape, ear structure,
        and breed-specific appearance.
      </p>

      <h2 id="tech-stack">Tech Stack and Pipeline</h2>

      <h3>Tech stack</h3>
      <ul>
        <li>
          <strong>Programming Language:</strong> Python
        </li>
        <li>
          <strong>Data Processing:</strong> NumPy, Pandas
        </li>
        <li>
          <strong>Deep Learning Frameworks:</strong> PyTorch, DINOv2 (Vision Transformer)
        </li>
        <li>
          <strong>Machine Learning:</strong> Scikit-learn (Logistic Regression, K-Means, PCA, t-SNE)
        </li>
        <li>
          <strong>Visualization:</strong> Matplotlib, Seaborn
        </li>
        <li>
          <strong>Development Environment:</strong> Jupyer Notebook, Google Colab
        </li>
        <li>
          <strong>Version Control:</strong> Github
        </li>
      </ul>

      <br />
      <h3>Pipeline</h3>

      <p>
        The workflow followed a feature-based deep learning pipeline rather than full
        end-to-end training. Each image was first passed through a pretrained DINOv2 model
        to produce a compact numerical embedding. These embeddings were then standardised or
        normalised depending on the experiment and used in downstream analysis.
      </p>
      <ul>
        <li>Load and preprocess images from the selected datasets.</li>
        <li>Extract feature embeddings using pretrained DINOv2.</li>
        <li>Apply standardisation or L2 normalisation to the feature vectors.</li>
        <li>Reduce dimensionality with PCA and t-SNE for visual inspection.</li>
        <li>Run clustering algorithms such as K-Means on the learned feature space.</li>
        <li>Train lightweight classifiers such as Logistic Regression on extracted features.</li>
        <li>Evaluate outputs using visual separation and confusion matrices.</li>
      </ul>
      <p>
        This pipeline is useful because it shows that strong pretrained representations can
        make downstream tasks much easier. Instead of learning visual features from scratch,
        the classifier only needs to learn decision boundaries over already meaningful embeddings.
      </p>

      <h2 id="feature-extraction">Feature Extraction</h2>
      <p>
        A key part of the project was the use of <strong>DINOv2 embeddings</strong> as the
        core image representation. DINOv2 is a self-supervised vision transformer trained to
        produce rich visual features without requiring manual labels during pretraining. As a
        result, its embeddings capture semantic image properties such as shape, texture, pose,
        and object-level structure.
      </p>
      <p>
        After extraction, the feature vectors were prepared for downstream learning.
        In some experiments, the embeddings were <strong>standardised</strong> so that each
        feature dimension had a comparable scale. In others, they were <strong>L2-normalised </strong>
        so that comparisons depended more on the direction of the embedding than on its raw
        magnitude. This was particularly useful for clustering and distance-based analysis.
      </p>
      <p>
        The overall idea was to evaluate the representation itself. If the extracted features
        are truly informative, then similar images should naturally appear close together in
        feature space, and even simple unsupervised or linear methods should perform well.
      </p>

      <h2 id="analysis">Analysis & Visualisation</h2>
      <p>
        To inspect how the learned feature space was organised, the project used both
        <strong> Principal Component Analysis (PCA)</strong> and <strong>t-SNE</strong>.
        PCA provides a linear projection that preserves as much global variance as possible,
        while t-SNE captures local neighbourhood structure and often reveals cluster
        separation more clearly in complex high-dimensional embeddings.
      </p>

      <h3>Cats vs Dogs — PCA of DINOv2 Features</h3>
      <p>
        The PCA projection of the Cats vs Dogs embeddings shows a strong natural separation
        between the two classes. Cat images and dog images occupy distinct regions in the
        projected feature space, indicating that the pretrained DINOv2 representation has
        already learned highly discriminative semantic features even before a dedicated
        classifier is trained.
      </p>

      <img
        src="/images/project details images/project5/catvsdog_pca_output.png"
        alt="PCA of DINOv2 features for Cats vs Dogs"
        className="learn_more_image"
      />

      <p className="image-caption">
        PCA projection of DINOv2 features for Cats vs Dogs, showing clear class-level separation.
      </p>

      <h3>Cats vs Dogs — K-Means Clustering in PCA Space</h3>
      <p>
        K-Means clustering was applied to the DINOv2 feature space using two clusters. The
        resulting separation aligns closely with the true binary class structure, showing that
        the learned embeddings are strong enough for unsupervised methods to recover meaningful
        groupings. This is an important result because it suggests that the feature extractor
        itself has encoded most of the distinction between cats and dogs.
      </p>

      <img
        src="/images/project details images/project5/catvsdog_kmeans_pca_l2normalised_output.png"
        alt="K-Means clustering in PCA space for Cats vs Dogs"
        className="learn_more_image"
      />

      <p className="image-caption">
        K-Means clustering on L2-normalised DINOv2 embeddings, revealing strong unsupervised separation.
      </p>

      <h3>Cats vs Dogs — t-SNE of Standardised Features</h3>
      <p>
        The t-SNE visualisation gives an even clearer view of class structure. Compared with
        PCA, the cats and dogs form more compact and well-separated local regions, which
        suggests that the deep embedding space contains highly informative neighbourhood
        relationships. This makes the feature representation especially suitable for both
        clustering and simple downstream classification.
      </p>

      <img
        src="/images/project details images/project5/catvsdog_tsne_output.png"
        alt="t-SNE of DINOv2 features for Cats vs Dogs"
        className="learn_more_image"
      />

      <p className="image-caption">
        t-SNE projection of standardised DINOv2 features for Cats vs Dogs with strong class separation.
      </p>

      <h3>Oxford-IIIT Pets — PCA of DINOv2 Features</h3>
      <p>
        For the Oxford-IIIT Pets dataset, PCA was used to project embeddings from 37 pet
        breeds into two dimensions. Unlike the binary Cats vs Dogs task, this is a much more
        challenging fine-grained classification setting. In the PCA plot, multiple breed groups
        can still be observed, although some overlap remains because PCA compresses a complex
        high-dimensional representation into only two principal components.
      </p>

      <img
        src="/images/project details images/project5/oxfordiitpets_features_pca_output.png"
        alt="PCA of DINOv2 features for Oxford-IIIT Pets"
        className="learn_more_image"
      />

      <p className="image-caption">
        PCA projection of Oxford-IIIT Pets embeddings, showing partial breed-level grouping in two dimensions.
      </p>

      <h3>Oxford-IIIT Pets — t-SNE of DINOv2 Features</h3>
      <p>
        The t-SNE projection reveals the fine-grained structure much more clearly. Individual
        breeds form compact clusters with clearer boundaries than in PCA, showing that the
        DINOv2 embeddings preserve breed-specific visual information. This demonstrates that
        the learned representation is not only useful for broad category separation, but also
        for more subtle image distinctions.
      </p>

      <img
        src="/images/project details images/project5/oxfordiitpets_features_tsne_output.png"
        alt="t-SNE of DINOv2 features for Oxford-IIIT Pets"
        className="learn_more_image"
      />

      <p className="image-caption">
        t-SNE projection of Oxford-IIIT Pets embeddings showing clear fine-grained clustering by breed.
      </p>

      <h2 id="classification">Classification Results</h2>

      <h3>Cats vs Dogs — Logistic Regression on DINOv2 Features</h3>
      <p>
        A Logistic Regression classifier was trained on top of the extracted DINOv2 features
        for the Cats vs Dogs task. Despite being a simple linear model, the results were
        extremely strong because the feature embeddings already separated the two classes very
        well. The confusion matrix shows only a very small number of errors.
      </p>
      <p>
        From the confusion matrix, cat images were correctly classified in 2495 cases and
        misclassified only 3 times, while dog images were correctly classified in 2490 cases
        and misclassified 4 times. This corresponds to near-perfect performance and highlights
        how effective pretrained DINOv2 features are for downstream image classification.
      </p>

      <img
        src="/images/project details images/project5/catvsdog_confusionmatrix_output.png"
        alt="Confusion matrix for Cats vs Dogs classification"
        className="learn_more_image"
      />

      <p className="image-caption">
        Confusion matrix for Logistic Regression on DINOv2 features for Cats vs Dogs.
      </p>

      <h3>Oxford-IIIT Pets — Multi-Class Classification</h3>
      <p>
        The Oxford-IIIT Pets experiment extended the analysis from binary classification to a
        more challenging multi-class setting. The confusion matrix shows strong diagonal values,
        which indicates that most pet breeds were correctly predicted. The limited number of
        off-diagonal errors suggests that misclassifications mainly occurred between visually
        similar breeds, which is expected in fine-grained recognition tasks.
      </p>
      <p>
        This part of the project demonstrates that DINOv2 embeddings remain informative even
        when the classification problem becomes more detailed and visually nuanced. The model
        was able to preserve breed-level distinctions strongly enough for effective downstream
        prediction.
      </p>

      <img
        src="/images/project details images/project5/oxfordiit_confusionmatrix_output.png"
        alt="Confusion matrix for Oxford-IIIT Pets classification"
        className="learn_more_image"
      />

      <p className="image-caption">
        Confusion matrix for Oxford-IIIT Pets showing strong multi-class prediction performance.
      </p>

      <h2 id="insights">Key Insights</h2>
      <ul>
        <li>
          Pretrained DINOv2 embeddings are highly discriminative and already encode strong
          semantic information before task-specific training.
        </li>
        <li>
          Simple downstream models such as Logistic Regression can achieve excellent
          performance when the feature representation is strong.
        </li>
        <li>
          Unsupervised clustering methods such as K-Means can recover meaningful structure
          directly from deep features, especially in the Cats vs Dogs task.
        </li>
        <li>
          PCA is useful for observing overall global structure, while t-SNE reveals finer
          local clustering patterns more clearly.
        </li>
        <li>
          The Oxford-IIIT Pets results show that pretrained embeddings are effective not only
          for broad image categories, but also for fine-grained breed-level recognition.
        </li>
      </ul>

      <h3 id="improvements">Future Improvements</h3>
      <ul>
        <li>Add quantitative metrics such as accuracy, precision, recall, and F1-score for each experiment.</li>
        <li>Compare DINOv2 embeddings with CNN-based feature extractors such as ResNet or EfficientNet.</li>
        <li>Evaluate additional clustering methods such as DBSCAN or Gaussian Mixture Models on the image embeddings.</li>
        <li>Use UMAP as an additional dimensionality reduction method for comparison with PCA and t-SNE.</li>
        <li>Perform error analysis on visually similar breeds to better understand failure cases.</li>
        <li>Build a lightweight demo application that classifies uploaded pet images using pretrained embeddings.</li>
      </ul>

      <div className="project-links-icons" id="links">
        <a
          href="https://github.com/Gladnx/Image-Processing-with-Deep-Neural-Networks"
          target="_blank"
          rel="noreferrer"
          className="project-link-icon"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </ProjectLayout>
  )
}