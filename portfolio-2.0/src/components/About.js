import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
  color: #fff;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  color: #00ffea;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

function About() {
  return (
    <AboutSection>
      <AboutContent>
        <Heading>About Me</Heading>
        <Paragraph>
          Hi, I am Edmund Lim, a Software Engineering student with a technical
          background, including hands-on experience in full-stack development,
          embedded systems, web development, and digital logic design. Able to
          develop complex web applications and proficiency in multiple
          programming languages and tools. Skilled in leading teams, providing
          educational support, and contributing to technical projects.
        </Paragraph>
      </AboutContent>
    </AboutSection>
  );
}

export default About;