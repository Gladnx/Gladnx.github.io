import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project1() {
  return (
    <ProjectLayout
      toc={[
        ['introduction', 'Introduction'],
        ['general-description', 'General Description'],
        ['existing-technology', 'Existing Technology'],
        ['drawbacks', 'Drawbacks/Challenges'],
        ['proposed-invention', 'Proposed Invention'],
        ['advantages', 'Advantages']
      ]}
    >
      <h3 className="specific-heading">
        SYSTEM AND METHOD FOR AUTOMATICALLY GRADING STORAGE OF ONIONS USING AN ARTIFICIAL-INTELLIGENCE ENABLED
        ELECTROMECHANICAL PROCESS
      </h3>
      <br />

      <h2 id="introduction">Introduction</h2>
      <p>
        Farmers are facing a large number of onions loss during the post-production of onions due to poor storage
        management. Although the traditional method of making onion husks saves money, the loss of onions in this storage
        is huge and these storages are not economically viable for long period. We designed this storage system to
        overcome this storage problem and avoid the wastage of onions during the storage period.
      </p>
      <br />

      <h2 id="general-description">General Description</h2>
      <p>
        This system first uses an improved traditional grading System to separate a large number of onions based on their
        Size. After onion size grading, the system will predict the quality of Onions through an image processing
        algorithm. Farmers can use this system to divide a large number of onions in less time.
        <br />
        <br />
        The system ensures good-quality onions are stored in cold storage and poor-quality onions are either separated or
        used for different purposes. This system helps economic gain by reducing sprouting Losses, which could be as high
        as 10 – 15%.
      </p>
      <br />

      <h2 id="existing-technology">Existing Technology</h2>
      <p>
        Onion, a widely consumed vegetable across the country throughout the year, is mainly cultivated in three seasons
        i.e., during Kharif, late kharif, and rabi. The crop harvested during the rabi accounts for 60% of onion
        production and hits the markets from March to June.
        <br />
        <br />
        In India there are different types of storage structures based on cost and need, they are Naturally ventilated
        structures, low-cost thatched roof storage, bottom and side ventilated storage structure, and cold storage
        structure.
      </p>

      <img
        src="/images/project%20details%20images/image.png"
        className="learn_more_image"
        alt="Bamboo Hut Storage"
      />
      <div className="image-caption">Figure 1: Bamboo Hut Storage</div>

      <img
        src="/images/project%20details%20images/image.png"
        className="learn_more_image"
        alt="Onion Cold Storage"
      />
      <div className="image-caption">Figure 2: Onion Cold Storage</div>

      <h2 id="drawbacks">Drawbacks / Problems / Challenges in the Existing System</h2>
      <ol>
        <li>Low storage duration of onions due to improper temperature control</li>
        <li>Durability and strength of the storage structure</li>
        <li>Can’t identify the present condition of the onions stored in the storage</li>
        <li>Can’t separate the bad onions stored in a large number of onions as they can affect other onions</li>
      </ol>
      <br />

      <h2 id="proposed-invention">Proposed Invention</h2>
      <p>
        The proposed invention is designed to save time, improve rural storage Infrastructure, and save poor-quality
        products that have high chances of degradation.
        <br />
        <br />
        Then, the stored onions in each rotator motor box are scanned through the real-time thermal camera and sensors to
        identify the quality of the onions.
      </p>

      <div className="image-row">
        <div className="image-container">
          <img
            src="/images/project%20details%20images/image.png"
            alt="Storage design 01"
            className="learn_more_image2"
          />
          <div className="image-caption">Figure 3: Storage design 01</div>
        </div>
        <div className="image-container">
          <img
            src="/images/project%20details%20images/image.png"
            alt="Storage design 02"
            className="learn_more_image2"
          />
          <div className="image-caption">Figure 4: Storage design 02</div>
        </div>
      </div>

      <h2 id="advantages">Advantages</h2>
      <ul>
        <li>Reduces post-harvest onion losses by separating defective onions before storage.</li>
        <li>Improves grading speed and consistency using sensors + AI.</li>
        <li>Helps farmers make better storage decisions and reduce spoilage.</li>
      </ul>
    </ProjectLayout>
  )
}
