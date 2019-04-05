/* global tw */
import React from 'react';
import styled from 'react-emotion';

import Year from '../components/Year';

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const FooterSection = () => (
  <Footer>
    &copy; Oriol Torrillas, <Year />
    <br />
    <small>
      Based on <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Gatsby Starter Portfolio Cara</a>
    </small>
    .
  </Footer>
);

export default FooterSection;
