import React from "react";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Angelos Eleftheriou </span>
            from <span className="purple"> Cyprus.</span>
            <br />
            I am currently an undergraduate student at the University of Cyprus.
            <br />
            I study Electrical and Computer
            Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <BsChevronRight /> Travelling
            </li>
            <li className="about-activity">
              <BsChevronRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <BsChevronRight /> Create awesome devices
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "We're Changing the World with Technology"{" "}
          </p>
          <footer className="blockquote-footer">Bill Gates.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
