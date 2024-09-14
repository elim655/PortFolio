import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: #000;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: #0d0d0d;
  padding: 1.5rem;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  border: 1px solid #00ffea;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 1rem;
  color: #00ffea;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #00ffea;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Projects() {
  const projectList = [
    {
      name: 'Truco Card Application',
      description: 'Java, Android Studio, SpringBoot, SQL',
      link: 'https://github.com/elim655/Truco',
    },
    {
      name: '5-Stage MIPS Pipeline Processor',
      description: 'Verilog, Questa Sim',
      link: 'https://github.com/elim655/5-Stage-MIPS-Pipeline-Processor',
    },
    {
      name: 'Room Service Robot - iRobot Roomba',
      description: 'C, Python, Embedded Systems',
      link: 'https://github.com/elim655/RoomServiceRobot-iRobot-Roomba',
    },
    {
      name: 'FPGA Vending Machine Project',
      description: 'Quartus Prime, FPGA, Verilog HDL',
      link: 'https://github.com/elim655/FPGA-Vending-Machine',
    },
  ];

  return (
    <ProjectsSection>
      <ProjectsGrid>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLink
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </ProjectLink>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;