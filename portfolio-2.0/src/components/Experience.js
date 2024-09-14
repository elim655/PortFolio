import React from 'react';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background: #0d0d0d;
  color: #fff;
`;

const ExperienceContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Job = styled.div`
  margin-bottom: 2rem;
`;

const JobTitle = styled.h3`
  color: #00ffea;
`;

const JobDetails = styled.p`
  margin-bottom: 0.5rem;
`;

const JobDescription = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
`;

function Experience() {
  return (
    <ExperienceSection>
      <ExperienceContent>
        <Job>
          <JobTitle>
            Digital Logic Design CPR E 281 – Teaching Assistant
          </JobTitle>
          <JobDetails>Aug 2023 – Present | Iowa State University, Ames, IA</JobDetails>
          <JobDescription>
            <li>
              Conduct weekly labs with FPGA boards and assist in lectures, grading, and office hours.
            </li>
          </JobDescription>
        </Job>
        <Job>
          <JobTitle>Web Developer Intern – DNF Cable</JobTitle>
          <JobDetails>Dec 2021 – Jul 2022</JobDetails>
          <JobDescription>
            <li>
              Developed and maintained company websites using HTML, CSS, and JavaScript.
            </li>
            <li>
              Implemented responsive design techniques for optimal viewing on various devices.
            </li>
          </JobDescription>
        </Job>
      </ExperienceContent>
    </ExperienceSection>
  );
}

export default Experience;