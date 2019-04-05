/* global tw */
import React from 'react';
import styled from 'react-emotion';

import 'typeface-cantata-one';
import 'typeface-open-sans';

import { Divider } from '../components/Divider';
import { Title } from '../components/Typography';
import { Content, Inner } from '../components/Container';

import { waveAnimation } from '../styles/animations';

import avatar from '../images/avatar.jpg';

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const AboutSection = () => (
  <>
    <Content speed={0.4} offset={3}>
      <Inner>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating Emoji
            into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel every
          day. My mother cried the day I was born because she knew she’d never be prettier than me. You should make me your
          campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids want to know where
          Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all right?
        </AboutDesc>
      </Inner>
    </Content>
    <Divider fill="#23262b" speed={0.2} offset={4}>
      <WaveWrapper>
        <InnerWave>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
            <path className={waveAnimation}>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </InnerWave>
      </WaveWrapper>
    </Divider>
  </>
);

export default AboutSection;
