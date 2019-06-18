import React, { Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const AMPLayout = props => {
  const { title, children } = props;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        />
      </Head>

      <main>{children}</main>
    </Fragment>
  );
};

AMPLayout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AMPLayout;
