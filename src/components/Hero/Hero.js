import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hire me as your next Software Engineer! I come with the following
        frameworks: Technical Skills, Continuous Improvement, Adaptability,
        Interpersonal Skills, Effective Communication, & Business Acumen
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
