/* global tw */
import React from 'react';
import styled from 'react-emotion';

import 'typeface-cantata-one';
import 'typeface-open-sans';

import SVG from '../components/SVG';
import { Divider, DividerMiddle } from '../components/Divider';
import { BigTitle, Subtitle } from '../components/Typography';
import { Content } from '../components/Container';

import { UpDown, UpDownWide } from '../styles/animations';
import { hidden } from '../styles/utils';

import { colors } from '../../tailwind';

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const HeroSection = () => (
  <>
    <Divider speed={0.2} offset={0}>
      <UpDown>
        <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
        <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
        <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
        <SVG icon="triangle" width={12} stroke={colors.white} left="90%" top="50%" />
        <SVG icon="circle" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
        <SVG icon="triangle" width={16} stroke={colors['grey-darkest']} left="30%" top="65%" />
        <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
        <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
      <SVG icon="circle" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
      <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
      <SVG icon="upDown" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
      <SVG icon="upDown" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
      <SVG icon="triangle" width={8} stroke={colors['grey-darker']} left="25%" top="5%" />
      <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
      <SVG icon="box" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
      <SVG icon="box" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
      <SVG icon="box" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
      <SVG icon="hexa" width={16} stroke={colors['grey-darker']} left="10%" top="50%" />
      <SVG icon="hexa" width={8} stroke={colors['grey-darker']} left="80%" top="70%" />
    </Divider>
    <Content speed={0.4} offset={0}>
      <Hero>
        <BigTitle>
          Hello, <br /> I'm Oriol Torrillas
        </BigTitle>
        <Subtitle>I create interactive technology experiences</Subtitle>
      </Hero>
    </Content>
    <DividerMiddle bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)" speed={-0.2} offset={1.1} factor={2} />
  </>
);

export default HeroSection;
