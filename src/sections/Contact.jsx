/* global tw */
import React from 'react';
import styled from 'react-emotion';

import FooterSection from './Footer';

import SVG from '../components/SVG';
import { Title } from '../components/Typography';
import { Divider } from '../components/Divider';
import { Content, Inner } from '../components/Container';
import { IconLink } from '../components/Link';

import { UpDown, UpDownWide } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const ContactSection = () => (
  <>
    <Content speed={0.4} offset={4}>
      <Inner>
        <Title>Get in touch</Title>
        <ContactText>
          Say <a href="mailto:otorrillas@gmail.com">Hi</a> or find me on other platforms:{' '}
          <IconLink href="https://www.instagram.com/otorrillas" name="instagram" />
          <IconLink href="https://www.linkedin.com/in/otorrillas/" name="linkedin" />
        </ContactText>
      </Inner>
      <FooterSection />
    </Content>
    <Divider speed={0.1} offset={4}>
      <UpDown>
        <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
        <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
        <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
      <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
    </Divider>
  </>
);

export default ContactSection;
