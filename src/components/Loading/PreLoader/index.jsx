import React from 'react';
import { Helmet } from 'react-helmet';

const PreloadStyles = ({ href }) => {
  return (
    <Helmet>
      <link rel="preload" href={href} as="style" />
      <link rel="stylesheet" href={href} />
    </Helmet>
  );
};

export default PreloadStyles;
