import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { title: "Software Development", percentage: 85, icon: <FaHtml5 size={10} /> },
  { title: "Machine Learning", percentage: 60, icon: <FaJs size={10} /> },
  { title: "SDK Development", percentage: 90, icon: <FaCss3Alt size={10} /> },
  { title: "API Requests", percentage: 95, icon: <FaReact size={10} /> },
  { title: "Embedded Systems", percentage: 95, icon: <FaHtml5 size={10} /> },
  { title: "Electronics", percentage: 98, icon: <FaReact size={10} /> },
  { title: "IoT", percentage: 90, icon: <FaJs size={10} /> },
  { title: "UI/UX", percentage: 95, icon: <FaCss3Alt size={10} /> },
  { title: "Computer Vision", percentage: 75, icon: <FaJs size={10} /> },
  { title: "Web Development", percentage: 55, icon: <FaHtml5 size={10} /> },
  { title: "Graphics Design", percentage: 90, icon: <FaJs size={10} /> },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Github = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple">Skills</strong>
              </h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div key={index} className="item" style={{ margin: '0 20px' }}>
                    <div className="icon" style={{ width: '150px', margin: '0 auto 20px' }}>
                      <CircularProgressbar
                        value={skill.percentage}
                        text={`${skill.percentage}%`}
                        styles={buildStyles({
                          textColor: "white",
                          pathColor: "#a855f7",
                          trailColor: "#333",
                          textSize: "12px",
                        })}
                      />
                    </div>
                    <h5 style={{ marginBottom: '0px' }}>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
