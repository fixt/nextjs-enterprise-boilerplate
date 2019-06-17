import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <style global jsx>{`
        body {
          font-family: Roboto, sans-serif;
          padding: 30px;
          color: #444;
        }
      `}</style>
    </>
  );
}
