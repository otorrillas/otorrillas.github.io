import React from 'react';
import PropTypes from 'prop-types';

import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

const icons = {
  instagram: <FaInstagram />,
  linkedin: <FaLinkedin />,
};

export const IconLink = ({ href, name }) => (
  <Link href={href}>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>{icons[name]}</IconContext.Provider>
  </Link>
);

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
};
