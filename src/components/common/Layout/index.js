import React, { memo } from 'react';
import { useAmp } from 'next/amp';

import AMPLayout from './AMPLayout';
import FullLayout from './FullLayout';

const Layout = props => {
  const isAmp = useAmp();

  return isAmp ? <AMPLayout {...props} /> : <FullLayout {...props} />;
};

export default memo(Layout);
