import React from "react";
import LogoImage from "../../components/LogoImage/logoImage";
import logo from "../../assets/SWAT.jpg";
import home from "../../assets/home.jpg";
function HomePage(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <LogoImage
              imageName={logo}
              width="300"
              height="180"
              alt="SWAT logo"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div>
              The Student Wellbeing Awareness Team (SWAT) empowers students
              about their own health by raising awareness and providing
              education about health and wellbeing.The Student Wellbeing
              Awareness Team (SWAT) are current students who lead health
              promotion action on campus, creating space and conversations
              around mental health and wellbeing for students and the wider
              community.
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col text-center mt-5">
            <LogoImage imageName={home} width="800" height="400" alt="home" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
