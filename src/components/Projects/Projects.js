import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/project4.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/project3.jpg";
import chatify from "../../Assets/Projects/project1.png";
import suicide from "../../Assets/Projects/project5.png";
import bitsOfCode from "../../Assets/Projects/project2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Accurate Logistics"
              description="Accurate Logistics is a specialized system for managing shipping companies, parcel transportation, and postal services. It has been designed and developed using the latest programming languages and Oracle databases, along with two smartphone applications for the customer and the delivery agent (Android and iPhone)."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://accurate.accuratess.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="landing page"
              description="Accurate Smart Solutions is a landing page for software company "
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://accuratess.com/aboutPage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Oya"
              description="The React Online Store is a modern, responsive, and user-friendly e-commerce platform designed to provide a seamless shopping experience. Built with React, this online store offers a robust and efficient solution for both customers and administrators."
              ghLink="https://github.com/mawada99/Oya-FrontEnd-"
              demoLink="https://oya-frontend.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="editor-designer"
              description="A creative editor based on Fabric.js. It is an open-source creative image editor based on Fabric.js, aimed at allowing developers to quickly build their own image editor. It can be applied to scenarios such as poster design, cover design for Xiaohongshu public accounts, banner design, and more."
              ghLink="https://github.com/mawada99/editor-designer"
              demoLink="https://editor-designer.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="landing page by wordpress"
              description="Create a stunning and highly effective landing page using WordPress to captivate your audience and drive conversions. This landing page is designed with a user-friendly interface and customizable features, making it easy to tailor to your specific needs. Ideal for marketing campaigns, product launches, event registrations, or any targeted content, this WordPress landing page ensures a seamless user experience."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://vitalkonzept-leipzig.com/" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
