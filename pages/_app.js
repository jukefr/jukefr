import App, { Container } from "next/app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import NextSeo from "next-seo";
import withRedux from "next-redux-wrapper";
import SEO from "../next-seo.config";

const reducer = (
  state = {
    introHide: true,
    x: 0,
    y: 0,
    projects: [],
    transition: "all",
    swipeAction: ""
  },
  action
) => {
  switch (action.type) {
    case "SET_SCROLL":
      return { ...state, lastScroll: +new Date()};
    case "SET_PROJECTS":
      return { ...state, projects: action.payload };
    case "IS_MOBILE":
      return { ...state, isMobile: true };
    case "IS_DESKTOP":
      return { ...state, isMobile: false };
    case "INTRO_HIDE":
      return { ...state, introHide: true };
    case "INTRO_SHOW":
      return { ...state, introHide: false };
    case "SWIPE_UP":
      return { ...state, swipeAction: "slideUp" };
    case "SWIPE_DOWN":
      return { ...state, swipeAction: "slideDown" };
    case "SWIPE_LEFT":
      return { ...state, swipeAction: "slideLeft" };
    case "SWIPE_RIGHT":
      return { ...state, swipeAction: "slideRight" };
    case "SWIPE_RESET":
      return { ...state, swipeAction: "" };
    case "TRANSITION_ON":
      return { ...state, transition: "all" };
    case "TRANSITION_OFF":
      return { ...state, transition: "none" };
    case "HORIZONTAL_INCREMENT":
      return { ...state, x: state.x + 1 };
    case "HORIZONTAL_DECREMENT":
      return { ...state, x: state.x - 1 };
    case "VERTICAL_INCREMENT":
      return { ...state, y: state.y + 1 };
    case "VERTICAL_DECREMENT":
      return { ...state, y: state.y - 1 };
    default:
      return state;
  }
};

const makeStore = (initialState, option) => {
  return createStore(reducer, initialState);
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    ctx.store.dispatch({ type: "FOO", payload: "foo" });

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <NextSeo config={SEO} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
