import React from 'react';
import './Studio.css';
import { Row, Col, Image } from 'react-bootstrap';
import Iframe from 'react-iframe'




function Studio() {


  
const [iframeState, setIframeState] = React.useState(false);

  const iframeLoaded = () => {
    console.log('iframe loaded');
    setIframeState(true);
  }
  
  
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

        <Iframe
        url='https://app.boostapp.co.il/Rest.php?StudioUrl=60c59a38477cb'
        title='training-schedule'
        width={iframeState ? '100%' : '0'}
        height={iframeState ? '300rem' : '0'}
        ariaLabel='live-updating-studio-training sceduale'
        name='asdsad'
        className='iframeClass'
        onLoad={iframeLoaded}
        allowFullScreen
        loading='eager'
        />
      </div>
      <div id='contactForm' className="getInTouchDiv">
            <Row className="get-in-touch">
        <Col xs={12}>
          <h2>צרו קשר</h2>
        </Col>
        <Col xs={12}>
          <p>ניתן לפנות אלינו לכל שאלה או צורך שיעלו</p>
        </Col>
        <Col xs={12}>
          {/* Contact Information */}
          <address>
            omridan@theboxtivon.com  <strong>:מייל</strong><br />
            +123456789  <strong>:טלפון</strong> <br />
          </address>
        </Col>
        <Col xs={12}>
          {/* Social Media Links */}
          <a href="https://www.facebook.com/p/The-Box-Fitness-studio-100063003980969/" target="_blank" rel="noopener noreferrer">
            <Image src={"https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg"} alt="Facebook Logo" className="social-logo" />
          </a>
          <a href="https://www.instagram.com/theboxtivon/" target="_blank" rel="noopener noreferrer">
            <Image src={"https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg?w=2000"} alt="Instagram Logo" className="social-logo" />
          </a>
        </Col>
      </Row>
                </div>
        
    </div>
  );
}

export default Studio;
