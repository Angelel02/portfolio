import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/plot.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/3d.gif";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="FlowBot"
              description="Developed an AI-powered microfluidic control software for automating pressure regulation in gold nanostar synthesis. The software interfaces with Fluigent Flow-EZ controllers, enabling real-time pressure adjustments, AI-driven optimization, and live data visualization. Designed for Raspberry Pi 5, it features a user-friendly CustomTkinter GUI, enhancing automation, precision, and reproducibility in microfluidic research."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FlowBot AI"
              description="FlowBot AI is an AI-powered Lab Virtual assistant for researchers using the Fluigent Flow-EZ system. Built with Google Gemini AI and CustomTkinter, it provides real-time support, troubleshooting, and expert guidance on microfluidic experiments. Designed for efficiency and precision, FlowBot AI streamlines lab work with instant, specialized knowledge."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="All In One Compact Device for Lab Automation"
              description="Developed an all-in-one microfluidic control device using a Raspberry Pi 5 with a capacitive touchscreen to automate and manage pressure profiles for microfluidic experiments. This device integrates with Fluigent Flow-EZ controllers and features AI-powered software to optimize nanoparticle synthesis processes, such as gold nanostar production. Its compact, standalone design and intuitive interface provide precise control and real-time monitoring, making it an invaluable tool for nanoparticle-based biomedical research."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="KitchenLens"
              description="KitchenLens is an innovative application that leverages AI object recognition to automate and optimize the management of fridge and pantry contents. Using a real-time video feed and Google Gemini AI, KitchenLens identifies and tracks items within the fridge or pantry, generating a dynamic shopping list and suggesting recipes based on available ingredients. It also provides timely notifications for products nearing expiration, helping reduce food waste."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Edge Detection Software"
              description="This application showcases a live camera feed integrated with a real-time 3D graph, using OpenCV and CustomTkinter. It allows users to toggle edge detection, filter pixel values, and save pixel positions to a text file. The 3D graph visualizes the grayscale image's pixel intensity values, offering both surface and scatter plot options. The app leverages multithreading for smooth performance and uses a dark theme for a modern user interface, making it a powerful tool for real-time image processing and visualization."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Edge Detection Software Plotter"
              description="This application allows users to open a text file containing X and Y position data, which is then visualized in a scatter plot. The plot is generated using Matplotlib and embedded in a CustomTkinter window. The app processes the data by inverting the Y values and displays both individual points and a line connecting them. With a dark theme for the interface, the application provides an intuitive way to explore and visualize 2D position data in real-time."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
