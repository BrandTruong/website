import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
      <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href="mailto: btruong100381+p@gmail.com">
            btruong100381@gmail.com
          </LinkItem>
        </LinkColumn>
        <SocialContainer>
          <SocialIcons href="https://github.com/BrandTruong">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/BrandTruong">
            <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
