import { Component } from "react";
import { connect } from "react-redux";

import Page from "../layouts/default"

import intro from "../components/Intro";
import swiper from "../components/Swiper";

import projectBatch from "../utils/project-batch";
import isMobileUtility from "../utils/is-mobile"

import projects from "../components/Projects.json";

class Index extends Component {
  constructor(props) {
    super(props);
    this.hideIntro = () => {
      this.props.dispatch({ type: "INTRO_HIDE" });
    };
    this.swipeKeyboard = event => {
      switch (event.keyCode) {
        case 38:
          event.preventDefault();
          this.handleSwiperTransition("Up");
          break;
        case 39:
          event.preventDefault();
          this.handleSwiperTransition("Right");
          break;
        case 37:
          event.preventDefault();
          this.handleSwiperTransition("Left");
          break;
        case 40:
          event.preventDefault();
          this.handleSwiperTransition("Down");
          break;
        case 32:
          event.preventDefault();
          this.hideIntro();
          break;
        default:
          break;
      }
    };

    this.handleTouchStart = event => {
      this.setState(state => ({
        ...state,
        touchStart: { x: event.touches[0].clientX, y: event.touches[0].clientY }
      }));
    };

    this.handleTouchEnd = event => {
      event.preventDefault();
      const cord = {
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY
      };
      let x, y, xDirection, yDirection;
      if (cord.x > this.state.touchStart.x) {
        x = cord.x - this.state.touchStart.x;
        xDirection = 1;
      } else {
        x = cord.x - this.state.touchStart.x;
        xDirection = 0;
      }

      if (cord.y > this.state.touchStart.y) {
        y = cord.y - this.state.touchStart.y;
        yDirection = 1;
      } else {
        y = cord.y - this.state.touchStart.y;
        yDirection = 0;
      }

      x = Math.abs(x);
      y = Math.abs(y);

      if (x > y) {
        if (xDirection === 1) {
          this.handleSwiperTransition("Left");
        } else {
          this.handleSwiperTransition("Right");
        }
      } else {
        if (yDirection === 1) {
          this.handleSwiperTransition("Up");
        } else {
          this.handleSwiperTransition("Down");
        }
      }
    };

    this.handleScroll = event => {
      event.preventDefault();
      if (event.deltaY > 0) {
        this.handleSwiperTransition("Up");
      } else {
        this.handleSwiperTransition("Down");
      }
    };

    this.handleClick = event => {
      event.preventDefault();
      if (event.button === 0) {
        this.handleSwiperTransition("Left");
      } else {
        this.handleSwiperTransition("Right");
      }
    };

    this.handleSwiperTransition = async direction => {
      const delay = t => new Promise(resolve => setTimeout(resolve, t));
      if (this.props.lastScroll) {
        const currentDate = +new Date();
        if (currentDate - this.props.lastScroll < 300) {
          return;
        }
      }

      await this.props.dispatch({ type: "SET_SCROLL" });

      await this.props.dispatch({ type: "TRANSITION_ON" });
      switch (direction) {
        case "Right":
          await this.props.dispatch({ type: "SWIPE_RIGHT" });
          await this.props.dispatch({ type: "HORIZONTAL_INCREMENT" });
          break;
        case "Left":
          await this.props.dispatch({ type: "SWIPE_LEFT" });
          await this.props.dispatch({ type: "HORIZONTAL_DECREMENT" });
          break;
        case "Up":
          await this.props.dispatch({ type: "SWIPE_UP" });
          await this.props.dispatch({ type: "VERTICAL_DECREMENT" });
          break;
        case "Down":
          await this.props.dispatch({ type: "SWIPE_DOWN" });
          await this.props.dispatch({ type: "VERTICAL_INCREMENT" });
          break;
        default:
          break;
      }
      await delay(250);
      await this.props.dispatch({ type: "TRANSITION_OFF" });
      this.props.dispatch({ type: "SWIPE_RESET" });
      await this.props.dispatch({
        type: "SET_PROJECTS",
        payload: projectBatch({
          projects,
          indexX: this.props.x,
          indexY: this.props.y,
          isMobile: this.props.isMobile
        })
      });
    };

    this.checkMobile = isMobileUtility;
  }

  componentDidMount() {
    const store = this.props;
    if (localStorage.getItem("introHasPlayed") !== "true") {
      store.dispatch({ type: "INTRO_SHOW" });
      localStorage.setItem("introHasPlayed", true);
    }
    store.dispatch({
      type: "SET_PROJECTS",
      payload: projectBatch({ projects, isMobile: this.props.isMobile })
    });

    if (this.props.isMobile) {
      document.addEventListener("touchstart", this.handleTouchStart);
      document.addEventListener("touchend", this.handleTouchEnd);
    } else {
      document.addEventListener("keydown", this.swipeKeyboard);
      document.addEventListener("wheel", this.handleScroll);
      document.addEventListener("click", this.handleClick);
      document.addEventListener("contextmenu", this.handleClick);
    }
  }

  componentWillUnmount() {
    if (this.props.isMobile) {
      document.removeEventListener("touchstart", this.handleTouchStart);
      document.removeEventListener("touchend", this.handleTouchEnd);
    } else {
      document.removeEventListener("keydown", this.swipeKeyboard);
      document.removeEventListener("wheel", this.handleScroll);
      document.removeEventListener("click", this.handleClick);
      document.removeEventListener("contextmenu", this.handleClick);
    }
  }

  render() {
    return (
      <Page>
        {this.props.swipeAction &&
          swiper({ ...this.props, className: "effects" })}
        {this.props.projects.length !== 0 &&
          swiper({ ...this.props, className: "main" })}

        {!this.props.introHide && (
          <section className="introSection">
            <section
              className="introOverlay"
              onTouchStart={this.hideIntro}
              onClick={this.hideIntro}
            />
            {intro({ ...this.props })}
          </section>
        )}
        <style global jsx>{`
          body {
            font-family: "HelveticaNeue-Light", "Helvetica Neue Light",
              "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            background: #282a36;
            overflow: hidden;
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            font-size: 16px;
          }

          .introSection {
            top: 0;
            left: 0;
            overflow: hidden;
            position: fixed;
            z-index: 3;
            width: 100vw;
            height: 100vh;
          }

          .introOverlay {
            top: 0;
            left: 0;
            overflow: hidden;
            position: fixed;
            width: 100vw;
            height: 100vh;
            z-index: 9;
          }

          .mobileSwipeOverlay {
            width: 100vw;
            height: 100vh;
            position: fixed;
            background: none;
            top: 0;
            left: 0;
          }

          ul.main,
          ul.effects {
            height: ${this.props.isMobile === false ? "240vh" : "300vh"};
            width: ${this.props.isMobile === false ? "240vw" : "300vw"};
            list-style: none;
            margin: 0;
            transition: ${this.props.transition} 0.2s ease-out;
            padding: 0;
            display: grid;
            z-index: 5;
            position: fixed;
            top: ${this.props.isMobile === false ? "-70vh" : "-100vh"};
            left: ${this.props.isMobile === false ? "-70vw" : "-100vw"};
            grid-template-columns: ${this.props.isMobile === false
              ? "80vw 80vw 80vw"
              : "100vw 100vw 100vw"};
            grid-template-rows: ${this.props.isMobile === false
              ? "80vh 80vh 80vh"
              : "100vh 100vh 100vh"};
          }

          ul.slideLeft.main {
            left: ${this.props.isMobile === false ? "10vw" : "0"};
          }

          ul.slideUp.main {
            top: ${this.props.isMobile === false ? "10vh" : "0"};
          }

          ul.slideRight.main {
            left: ${this.props.isMobile === false ? "-150vw" : "-200vw"};
          }

          ul.slideDown.main {
            top: ${this.props.isMobile === false ? "-150vh" : "-200vh"};
          }

          ul.slideDown.main li:nth-child(2),
          ul.slideDown.main li:nth-child(4),
          ul.slideUp.main li:nth-child(2),
          ul.slideUp.main li:nth-child(4) {
            display: none;
          }
          ul.slideLeft.main li:nth-child(1),
          ul.slideLeft.main li:nth-child(5),
          ul.slideRight.main li:nth-child(1),
          ul.slideRight.main li:nth-child(5) {
            display: none;
          }

          ul.effects li:nth-child(3) {
            display: none;
          }

          ul.effects.slideDown li:nth-child(1),
          ul.effects.slideDown li:nth-child(5),
          ul.effects.slideUp li:nth-child(1),
          ul.effects.slideUp li:nth-child(5) {
            display: none;
          }

          ul.effects.slideLeft li:nth-child(2),
          ul.effects.slideLeft li:nth-child(4),
          ul.effects.slideRight li:nth-child(2),
          ul.effects.slideRight li:nth-child(4) {
            display: none;
          }

          li {
            margin: ${this.props.isMobile === false ? "2.5vh 2.5vw" : "0"};
            height: ${this.props.isMobile === false ? "75vh" : "100vh"};
            width: ${this.props.isMobile === false ? "75vw" : "100vw"};
            background: #f8f8f2;
            padding: 0;
            display: block;
            border-radius: ${this.props.isMobile === false ? "10px" : "0"};
            overflow: hidden;
          }

          img {
            outline: none;
            border: none;
            object-fit: cover;
          }

          figcaption {
            display: flex;
            flex-direction: column;
            align-item: center;
            text-align: center;
            justify-content: center;
          }

          li:nth-child(1) {
            grid-column: 2;
            grid-row: 1;
          }
          li:nth-child(2) {
            grid-column: 1;
            grid-row: 2;
          }
          li:nth-child(3) {
            grid-column: 2;
            grid-row: 2;
          }

          li:nth-child(4) {
            grid-column: 3;
            grid-row: 2;
          }
          li:nth-child(5) {
            grid-column: 2;
            grid-row: 3;
          }

          .background {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2;
            height: 100vh;
            width: 100vw;
          }
        `}</style>
      </Page>
    );
  }
}

export default connect(state => state)(Index);
