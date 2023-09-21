import React from "react";
import "./Home.css";
import vid1 from "../assets/videos/iphone-size/vid1.mp4"
import vid2 from "../assets/videos/iphone-size/vid2.mp4"
import vid3 from "../assets/videos/iphone-size/vid3.mp4"
import vid4 from "../assets/videos/iphone-size/vid4.mp4"
import vid5 from "../assets/videos/iphone-size/vid5.mp4"
import vid6 from "../assets/videos/iphone-size/vid6.mp4"

const vids = [vid1, vid2, vid3, vid4, vid5, vid6];

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
                <video autoPlay loop muted className="introVideo">
                    <source src={videoSource} type="video/mp4" />
                </video>
                <div className="introText">
                <div className="stacked-sections">
        <div className="section">
          {/* Content for the first section */}
          <div className="section-text">
          <h3>אימוני גברים</h3>
          </div>
        </div>
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
          <h3>טיפולים תקופתיים</h3>
          </div>
        </div>
        </div>
      

                    </div>

                    <video autoPlay loop muted className="introVideo" id='rightIntroVideo'>
                    <source src={videoSource} type="video/mp4" />
                </video>


            </div>
        </div>
    )
}

export default Home;