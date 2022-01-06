import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';

const Skills = () =>  (
  <Section id="skills">
    <SectionDivider/>
    <SectionTitle main>Skills</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Concepts</ListTitle>
          <ListParagraph>
            OOP, Algorithms, Data Structures, Operating Systems, Processes/Threading, Locking
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            C++, C, C#, Python, HTML5, CSS3, Verilog, Javascript, Java, Bash, R
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Technologies</ListTitle>
          <ListParagraph>
            Unity, Android Studio, Linux OS, Xilinx ISE, Git, React, Next.JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
