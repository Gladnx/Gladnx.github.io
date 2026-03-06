import React from 'react'
import ProjectLayout from '../_shared/ProjectLayout.jsx'

export default function Project2() {
  return (
    <ProjectLayout
      toc={[
        ['overview', 'Overview'],
        ['tech', 'Tech Stack'],
        ['problem', 'Problem'],
        ['solution', 'Solution'],
        ['results', 'Results'],
        ['next', 'Next Improvements'],
        ['links', 'Links']
      ]}
    >
      <h3 className="specific-heading">AI software to detect harmful ingredients in packaged food products and beverages</h3>
      <br />

      <h2 id="overview">Overview</h2>
      <p>
        This project is an AI-powered system designed to identify potentially harmful ingredients in packaged food items and beverages. Many consumers find it difficult to understand long ingredient lists printed on product packaging. The application simplifies this process by using Optical Character Recognition (OCR) to extract ingredient text directly from product labels and applying machine learning techniques to analyze those ingredients. The system then highlights ingredients that may contain harmful additives, preservatives, or allergens, helping users make more informed and healthier food choices.
      </p>
      <br />
      <h2 id="tech">Tech Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
        <li><strong>Machine Learning:</strong> Python</li>
        <li><strong>Backend:</strong> Flask</li>
        <li><strong>Database:</strong> MySQL</li>
        <li><strong>OCR:</strong> EasyOCR, Tesseract OCR</li>
        <li><strong>Version control:</strong> Github</li>
      </ul>
      <br />

      <h2 id="problem">Problem</h2>
      <ul>
        Packaged food products often contain complex ingredient lists that are difficult for consumers to interpret. Many additives, preservatives, and chemical compounds are listed using technical names that most people do not recognize. As a result:

        <ul>
          <li>Consumers may unknowingly consume harmful or unhealthy ingredients.</li>
          <li>Individuals with dietary restrictions or allergies may struggle to identify unsafe ingredients.</li>
          <li>Manually researching each ingredient is time-consuming and impractical while shopping.</li>
        </ul>

        There is a lack of accessible tools that quickly analyze ingredient lists and explain potential health risks.

        This creates a need for a system that can automatically read and analyze ingredient labels to provide clear health insights.
      </ul>
      <br />
      
      <h2 id="solution">Solution</h2>
      <p>The proposed solution is an AI-based ingredient analysis system that automates the process of identifying harmful food ingredients. 
        
      <br/>
      <br/>

      The system works in the following steps: </p>
      <ol>
      
      <li><strong>Image Input</strong> - Users upload or capture an image of a packaged food label.</li>

      <li><strong>Text Extraction using OCR</strong> - The system uses OCR to detect and extract ingredient text from the label.</li>

      <li><strong>Ingredient Processing</strong> - The extracted text is cleaned and structured into individual ingredients.</li>

      <li><strong>Risk Identification</strong> - The system compares ingredients with a dataset of known harmful additives, preservatives, and allergens to highlight ingredients that may pose health risks.</li>

      <li><strong>User Feedback</strong> - The results are presented in a simple format, helping users understand whether a product contains potentially harmful components.</li>

      <li><strong>Doctor Confirmation</strong> - For added reliability, I also added an option for users to consult with a healthcare professional or nutritionist for personalized advice based on their health conditions and dietary needs.</li>
      </ol>
      
      This solution provides a fast, automated, and user-friendly way to evaluate packaged food ingredients.
      <br />
      <br />
      

      <h2 id="results">Results</h2>
      <p>
        The system successfully demonstrates the ability to:
      </p>
      <ul>
        <li>Extract ingredient text from packaged food labels using <strong>OCR technology</strong>.</li>
        <li>Identify and classify <strong>potentially harmful ingredients</strong> from extracted text.</li>
        <li>Provide clear outputs indicating <strong>which ingredients may pose health risks</strong>.</li>
        <li>Improve consumer awareness about food additives and preservatives.</li>
      </ul>
      <p>
        The project shows how <strong>AI and OCR can work together to build practical health-focused tools</strong>
        that assist consumers in making safer food choices.
      </p>
      <br />

      <h2 id="next">Next Improvements</h2>
      <ul>
      <li>
        <strong>Mobile App Integration:</strong>
        Allow users to scan food labels in real time using a smartphone camera.
      </li>
      <li>
        <strong>Expanded Ingredient Database:</strong>
        Include more global food additives and health risk classifications.
      </li>
      <li>
        <strong>Nutritional Analysis:</strong>
        Combine ingredient analysis with nutritional information such as sugar, sodium, and fat levels.
      </li>
      <li>
        <strong>Health Personalization:</strong>
        Provide warnings based on user-specific conditions such as allergies, diabetes, or dietary preferences.
      </li>
      <li>
        <strong>Deep Learning for OCR Accuracy:</strong>
        Improve text extraction accuracy for complex or low-quality images.
      </li>
      <li>
        <strong>Barcode Integration:</strong>
        Fetch ingredient data automatically using product barcode scanning.
      </li>
      </ul>
      <br />

      <div className="project-links-icons" id='links'>
        <a href="https://github.com/Gladnx/AI-software-to-identify-harmful-ingredients-in-packaged-food-items-and-beverages.git" target="_blank" rel="noreferrer" className="project-link-icon" aria-label="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </ProjectLayout>
  )
}
