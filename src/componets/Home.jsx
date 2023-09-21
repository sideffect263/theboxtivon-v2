import React from "react";
import "./Home.css";
import vid1 from "../assets/videos/iphone-size/vid1.mp4"
import vid2 from "../assets/videos/iphone-size/vid2.mp4"
import vid3 from "../assets/videos/iphone-size/vid3.mp4"
import vid4 from "../assets/videos/iphone-size/vid4.mp4"
import vid5 from "../assets/videos/iphone-size/vid5.mp4"
import vid6 from "../assets/videos/iphone-size/vid6.mp4"
import indoorImg from '../assets/infa/indoor.jpg'

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
      <a href="/studio" className="section">
          {/* Content for the first section */}
          <div className="section-text">
          <h3>אימוני גברים</h3>
          </div>
        </a>
        <div className="section">
          {/* Content for the second section */}
          <div className="section-text">
          <h3>אימוני נשים</h3>
          </div>
        </div>
        <div className="section">
          {/* Content for the third section */}
          <div className="section-text">
          <h3>אימונים אישיים</h3>
          </div>
        </div>
        <div className="section">
          {/* Content for the fourth section */}
          <div className="section-text">
          <h3>טיפולים פיזיוטרפיים</h3>
          </div>
        </div>
        </div>
      

                    </div>
                    <video autoPlay loop muted className="introVideo" id='rightIntroVideo'>
                    <source src={videoSource} type="video/mp4" />
                </video>


            </div>

            <a href="/contactPage" className="firstToSeconedBreak">
                <div className="firstToSeconedBreakText">
                    <h2>!קבעו שיעור היום</h2>
                    </div>
                    </a>
            
            <div className="secondItem">
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
    )
}

export default Home;