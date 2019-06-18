import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';

import TopNav from '../TopNav';

if (process.env.nodeEnv === 'production') {
  // Track client-side page views with Segment
  Router.events.on('routeChangeComplete', url => {
    global.analytics.page(url);
  });
}

const Layout = props => {
  const { title, children } = props;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>

      <TopNav />
      <main>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default memo(Layout);
