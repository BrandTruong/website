import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>

    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/BrandTruong">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/BrandTruong">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="mailto: btruong100381+p@gmail.com">
        <AiFillMail size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
