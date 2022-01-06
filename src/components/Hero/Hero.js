import React from 'react';

import { Section, SectionText, SectionTitle, GradientTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <GradientTitle main center>
        Hello <br/>
        I'm Brandon Truong
      </GradientTitle>
      <SectionText>
        I am a third year student at UCLA who does a bit of everything, 
        whether it be game dev, software construction, and graphic design!
      </SectionText>
      <Button onClick={() => 
        window.open('https://github.com/BrandTruong/brandtruong.github.io/blob/master/TruongBrandon.pdf')}>
        View Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;