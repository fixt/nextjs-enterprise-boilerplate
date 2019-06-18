// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import LogRocket from 'logrocket';
import * as snippet from '@segment/snippet';
import * as Sentry from '@sentry/browser';

// LogRocket
LogRocket.init('ouoefb/amp');

// Sentry alerting
process.on('unhandledRejection', err => {
  Sentry.captureException(err);
});
process.on('uncaughtException', err => {
  Sentry.captureException(err);
});

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  // Segment analytics
  renderSegmentSnippet() {
    const opts = {
      apiKey: process.env.segmentAnalyticsWriteKey,
      // note: the page option only covers SSR tracking.
      // Page.js is used to track other events using `window.analytics.page()`
      page: true,
    };

    if (process.env.nodeEnv === 'development') {
      return snippet.max(opts);
    }

    return snippet.min(opts);
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <script
            dangerouslySetInnerHTML={{ __html: this.renderSegmentSnippet() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
