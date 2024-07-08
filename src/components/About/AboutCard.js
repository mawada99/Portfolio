import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mawada Ahmed Hosney</span>
            from <span className="purple"> Banha,Al-Qalyubia,Egypt.</span>
            <br />
            I am currently employed as a frontEnd developer at Accurate Smart Solutions .
            <br />
            I am graduated from faculty of computer and Information, Ain shams university.
            <br />
            I was enrolled in Professional Training Scholarships in Information Technology Institute (ITI)
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mawada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
