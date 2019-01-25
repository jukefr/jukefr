import App, { Container } from 'next/app';
import React from 'react';
import NextSeo from 'next-seo';

// import your default seo configuration
import SEO from '../next-seo.config';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* Here we call NextSeo and pass our default configuration to it  */}
        <NextSeo config={SEO} />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Component {...pageProps} />
      </Container>
    );
  }
}
