import React from 'react';
import './Studio.css';




function Studio() {
  
  
  
  
  return (
    <div className="about">
      <div className="about-content">
        <h2>לוח אימונים</h2>
        <p>לוח האימונים מתאים לכל מי שרוצה להתחיל התאמן או להעלות את הרמה שלו</p>
        <p>אנחנו מציעים מגוון שיעורים שונים שמתאימים לכולם</p>

        <div className="list-of-topics">
        {/* Sub-topic 1 */}
        <a href="/services#sub-topic-1" className="sub-topic">
        <h3>FUNCTIONAL</h3>
        {/* Add content for sub-topic 1 here */}
      </a>

      {/* Sub-topic 2 */}
      <a href="/services#sub-topic-2" className="sub-topic">
        <h3>Self Functional</h3>
        {/* Add content for sub-topic 2 here */}
      </a>

      {/* Sub-topic 3 */}
      <a href="/services#sub-topic-3" className="sub-topic">
        <h3>Men's group</h3>
        {/* Add content for sub-topic 3 here */}
      </a>

      {/* Sub-topic 4 */}
      <a href="/services#sub-topic-4" className="sub-topic">
        <h3>Women's group</h3>
        {/* Add content for sub-topic 4 here */}
      </a>

      {/* Sub-topic 5 */}
      <a href="/services#sub-topic-5" className="sub-topic">
        <h3>Power & Balance</h3>
        {/* Add content for sub-topic 5 here */}
      </a>

      </div>

        <iframe 
        src='https://app.boostapp.co.il/Rest.php?StudioUrl=60c59a38477cb'
        title='training-schedule'
        width='100%'
        height='100%'
        id='traning-scaduel'
        frameBorder='0'
        allowFullScreen
        />
      </div>
    </div>
  );
}

export default Studio;
