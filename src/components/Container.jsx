/* global tw */
import styled from 'react-emotion';

import { ParallaxLayer } from 'react-spring/dist/addons';

export const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

export const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;
