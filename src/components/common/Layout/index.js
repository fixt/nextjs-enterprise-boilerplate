import React, { Fragment } from 'react';
import { useAmp } from 'next/amp';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Router from 'next/router';

export const config = {
  amp: 'hybrid',
};

if (process.env.nodeEnv === 'production') {
  // Track client-side page views with Segment
  Router.events.on('routeChangeComplete', url => {
    global.analytics.page(url);
  });
}

const Layout = props => {
  const { title, children } = props;
  const isAmp = useAmp();

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {isAmp ? (
          ''
        ) : (
          <link href="/semantic/semantic.min.css" rel="stylesheet" />
        )}
      </Head>

      <main>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Layout;
