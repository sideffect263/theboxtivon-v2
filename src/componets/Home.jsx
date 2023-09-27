import React from "react";
import "./Home.css";
import vid1 from "../assets/videos/iphone-size/vid1.mp4"
import vid2 from "../assets/videos/iphone-size/vid2.mp4"
import vid3 from "../assets/videos/iphone-size/vid3.mp4"
import vid4 from "../assets/videos/iphone-size/vid4.mp4"
import vid5 from "../assets/videos/iphone-size/vid5.mp4"
import vid6 from "../assets/videos/iphone-size/vid6.mp4"
import indoorImg from '../assets/infa/indoor.jpg'
import tempImg from '../assets/infa/omri-front.jpg'
import menImg from '../assets/infa/mensImg.png'
import womenImg from '../assets/infa/womanImg.png'
import personalImg from '../assets/infa/persoImg.png'
import treatImg from '../assets/infa/treatImg.png'
import { Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


tempImg();
treatImg();
const vids = [vid1, vid2, vid3, vid4, vid5, vid6];
const longText1="אנו מאמינים באישיות ובהתאמה מוחלטת לצרכי הכל אחד. שיטת האימון האישית שלנו שואפת לספק לך חוויה מותאמת אישית, כך שתוכל להשיג את התוצאות שאתה מחפש באופן יעיל ומהיר.";
const longText2="לאור החידושים המתמידים בתחום הכושר, אנו משתמשים בטכנולוגיה מתקדמת לניתוח המידע האישי שלך, מה שמאפשר לנו לכפול את התוצאות ולהקנות את ההמשך האופטימלי לתוכנית האימון שלך.";

//generate ranom number
const randomNum = () => {
    return Math.floor(Math.random() * vids.length) + 1;
}

//generate random video
const randomVid = () => {
    let num = randomNum();
    return vids[num - 1];
}

const videoSource = randomVid();


function Home() {
    return (
        <div className="homeContent">

        <div className="main">
        <div className="mainHome">
            <div className="firstItem">

                <div className="introVideo"
                  dangerouslySetInnerHTML={{
                    __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
              <source src=${videoSource} type="video/mp4" />
              Your browser does not support the video tag.
                         </video>`,
                  }}
                />

                <div className="introText">
                <div className="stacked-sections">
      <a href="/#menGroup" className="section">
          {/* Content for the first section */}
          <div className="section-text">
          <h3>אימוני גברים</h3>
          </div>
        </a>
        <a href="/#womenGroup" className="section">
          {/* Content for the second section */}
          <div className="section-text">
          <h3>אימוני נשים</h3>
          </div>
        </a>
        <a href="/#personalGroup" className="section">
          {/* Content for the third section */}
          <div className="section-text">
          <h3>אימונים אישיים</h3>
          </div>
        </a>
        <a href="spa" className="section">
          {/* Content for the fourth section */}
          <div className="section-text">
          <h3>טיפולים פיזיוטרפיים</h3>
          </div>
        </a>
        </div>
      

                    </div>
                    <video autoPlay loop muted className="introVideo" id='rightIntroVideo'>
                    <source src={videoSource} type="video/mp4" />
                </video>


            </div>

            <a href="/contactPage"id="studioItem" className="firstToSeconedBreak">
                <div className="firstToSeconedBreakText">
                    <h2>!קבעו שיעור היום</h2>
                    </div>
                    </a>
            
            <div  className="secondItem">
                <div className="imgCon">
                    <img src={indoorImg} alt="img" />
                </div>

                <div className="textCon">
                    <h2>הסטודיו</h2>
                    <h2>שלנו</h2>
                    <p>
                    {longText1}
                    </p>
                    
                    <p id="hideWhenShort">
                    {longText2}
                    </p>
            </div>

         </div>




        </div>

       

     </div>


     <div className="linkingPage">
            <div className="startOfliPage">
                <div className="liPageText">
                    <h2>השיעורים</h2>
                    <h2>שלנו</h2>

                </div>
               </div>
           
            </div>

            <div className="ourClasses">

                <div id='menGroup' className="classCon1">
                <div className="classConImg">
                      <img src={menImg} alt="img" />
                    </div>

                    <div className="classConText">
                      <div className="classConTextRow1">
                        <div id="hideWhenShort" className="classConTextRow1Text">
                
                    </div>
                    <div className="classConTextRow1Text">
                    <h2>אימוני</h2>
                    <h2>גברים</h2>
                      </div>
                    </div>
                    <div className="classConTextRow2">
                    <p>אימוני גברים מתאימים לכל גיל ורמת כושר</p>
                    <p>האימונים מתקיימים בקבוצות קטנות ומאפשרים לכל אחד להתאמן בצורה אישית ומותאמת לצרכיו</p>
                    <p>האימונים מתקיימים בסטודיו ובחוץ</p>
                    </div>
                    <div className="classConTextRow3">
                    <div id='coachBlacked' className="classConTextRow1Text">
                    <h3>מאמן: עומרי דן</h3>
                    </div>
                    <div id="hideWhenShort" className="classConTextRow1Text">
                      </div>

                      </div>
                    </div>
                    
                    <div className="classConBaner">
                      <h1>01</h1>
                    </div>
                   
                   
                </div>

                <div id='womenGroup' className="classCon1">
 

                    <div className="classConText">
                      <div className="classConTextRow1">
                        <div id="hideWhenShort" className="classConTextRow1Text">
                
                    </div>
                    <div className="classConTextRow1Text">
                    <h2>אימוני</h2>
                    <h2>נשים</h2>
                      </div>
                    </div>
                    <div className="classConTextRow2">
                    <p>אימוני נשים מתאימים לכל גיל ורמת כושר</p>
                    <p>האימונים מתקיימים בקבוצות קטנות ומאפשרים לכל אחד להתאמן בצורה אישית ומותאמת לצרכיו</p>
                    <p>האימונים מתקיימים בסטודיו ובחוץ</p>
                    </div>
                    <div className="classConTextRow3">
                    <div id='coachBlacked' className="classConTextRow1Text">
                    <h3>מאמן: עומרי דן</h3>
                    </div>
                    <div id="hideWhenShort" className="classConTextRow1Text">
                      </div>

                      </div>
                    </div>
                    
                    <div className="classConBaner">
                      <h1>02</h1>
                    </div>
                    <div className="classConImg">
                      <img src={womenImg} alt="img" />
                    </div>
                   
                   
                </div>

                
                <div id='personalGroup' className="classCon1">

                <div className="classConBaner">
                      <h1>03</h1>
                    </div>


                <div className="classConImg">
                      <img src={personalImg} alt="img" />
                    </div>

                    <div className="classConText">
                      <div className="classConTextRow1">
                        <div id="hideWhenShort" className="classConTextRow1Text">
                
                    </div>
                    <div className="classConTextRow1Text">
                    <h2>אימונים</h2>
                    <h2>אישיים</h2>
                      </div>
                    </div>
                    <div className="classConTextRow2">
                    <p>אימוני אישיים מתאימים לכל גיל ורמת כושר</p>
                    <p>האימונים מתקיימים בקבוצות קטנות ומאפשרים לכל אחד להתאמן בצורה אישית ומותאמת לצרכיו</p>
                    <p>האימונים מתקיימים בסטודיו ובחוץ</p>
                    </div>
                    <div className="classConTextRow3">
                    <div id='coachBlacked' className="classConTextRow1Text">
                    <h3>מאמן: עומרי דן</h3>
                    </div>
                    <div id="hideWhenShort" className="classConTextRow1Text">
                      </div>

                      </div>
                    </div>
                    
                    
                   
                   
                </div>
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
    )
}

export default Home;