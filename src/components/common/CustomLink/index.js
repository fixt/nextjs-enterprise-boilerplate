import React from 'react';
import { useAmp } from 'next/amp';

import { Link } from '../../../../server/routes';

const CustomLink = props => {
  const isAmp = useAmp();
  const { supportsAmp, children } = props;
  let { href } = props;

  if (supportsAmp) {
    href = isAmp ? href + '?amp=1' : href;
  }

  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default CustomLink;
