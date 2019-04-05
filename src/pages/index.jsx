/* global tw */
import React from 'react';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax } from 'react-spring/dist/addons';

import SEO from '../components/SEO';

import HeroSection from '../sections/Hero';
import ProjectSection from '../sections/Projects';
import AboutSection from '../sections/About';
import ContactSection from '../sections/Contact';

import '../styles/global';

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </Parallax>
  </React.Fragment>
);

export default Index;
