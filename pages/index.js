import { Component } from "react";
import { connect } from "react-redux";

import intro from "../components/intro.js";
import swiper from "../components/swiper.js";

import projectBatch from "../utils/project-batch";

const projects = [
  {
    name: "fyle",
    pictures: [
      { name: "code.png", caption: "fyle - web asset processing utilities" },
      {
        name: "browser.png",
        caption: "fyle - web asset processing utilities - documentation"
      }
    ]
  },
  {
    name: "nodend",
    pictures: [
      {
        name: "browser.png",
        caption: "nodend.com - personnal blog about all kinds of tech stuff"
      }
    ]
  },
  {
    name: "clize",
    pictures: [
      {
        name: "code.png",
        caption: "clize - run Javascript functions from the console"
      }
    ]
  }
];

class Page extends Component {
  constructor(props) {
    super(props);
    this.hideIntro = () => {
      this.props.dispatch({ type: "INTRO_HIDE" });
    };
    this.swipeKeyboard = event => {
      switch (event.keyCode) {
        case 38:
          event.preventDefault();
          this.props.dispatch({ type: "SWIPE_UP" });
          break;
        case 39:
          event.preventDefault();
          this.props.dispatch({ type: "SWIPE_RIGHT" });
          break;
        case 37:
          event.preventDefault();
          this.props.dispatch({ type: "SWIPE_LEFT" });
          break;
        case 40:
          event.preventDefault();
          this.props.dispatch({ type: "SWIPE_DOWN" });
          break;
        case 32:
          event.preventDefault();
          this.hideIntro();
          break;
        default:
          break;
      }
      this.handleSwiperTransition();
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
          this.props.dispatch({ type: "SWIPE_LEFT" });
          this.handleSwiperTransition();
        } else {
          this.props.dispatch({ type: "SWIPE_RIGHT" });
          this.handleSwiperTransition();
        }
      } else {
        if (yDirection === 1) {
          this.props.dispatch({ type: "SWIPE_UP" });
          this.handleSwiperTransition();
        } else {
          this.props.dispatch({ type: "SWIPE_DOWN" });
          this.handleSwiperTransition();
        }
      }
    };

    this.handleScroll = event => {
      event.preventDefault();
      if (event.deltaY > 0) {
        this.props.dispatch({ type: "SWIPE_UP" });
        this.handleSwiperTransition();
      } else {
        this.props.dispatch({ type: "SWIPE_DOWN" });
        this.handleSwiperTransition();
      }
    };

    this.handleClick = event => {
      event.preventDefault();
      if (event.button === 0) {
        this.props.dispatch({ type: "SWIPE_LEFT" });
        this.handleSwiperTransition();
      } else {
        this.props.dispatch({ type: "SWIPE_RIGHT" });
        this.handleSwiperTransition();
      }
    };

    this.handleSwiperTransition = async () => {
      const delay = t => new Promise(resolve => setTimeout(resolve, t));
      await delay(400);
      await this.props.dispatch({ type: "TRANSITION_OFF" });
      const direction = this.props.swipeAction.replace("slide", "");
      switch (direction) {
        case "Right":
          await this.props.dispatch({ type: "HORIZONTAL_INCREMENT" });
          break;
        case "Left":
          await this.props.dispatch({ type: "HORIZONTAL_DECREMENT" });
          break;
        case "Up":
          await this.props.dispatch({ type: "VERTICAL_DECREMENT" });
          break;
        case "Down":
          await this.props.dispatch({ type: "VERTICAL_INCREMENT" });
          break;
        default:
          break;
      }
      await this.props.dispatch({ type: "SWIPE_RESET" });
      await this.props.dispatch({
        type: "SET_PROJECTS",
        payload: projectBatch({
          projects,
          indexX: this.props.x,
          indexY: this.props.y,
          isMobile: this.props.isMobile
        })
      });
      await delay(100);
      await this.props.dispatch({ type: "TRANSITION_ON" });
    };

    this.checkMobile = () => {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    };
  }

  componentDidMount() {
    const store = this.props;
    if (localStorage.getItem("introHasPlayed") !== "true") {
      store.dispatch({ type: "INTRO_HIDE" });
      localStorage.setItem("introHasPlayed", true);
    }
    store.dispatch({
      type: "SET_PROJECTS",
      payload: projectBatch({ projects, isMobile: this.checkMobile() })
    });
    this.checkMobile()
      ? store.dispatch({ type: "IS_MOBILE" })
      : store.dispatch({ type: "IS_DESKTOP" });

    if (this.checkMobile()) {
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
      <div>
        {this.props.projects.length !== 0 && swiper({ ...this.props })}

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
            z-index: 2;
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

          ul {
            height: ${this.props.isMobile === false ? "240vh" : "300vh"};
            width: ${this.props.isMobile === false ? "240vw" : "300vw"};
            list-style: none;
            margin: 0;
            transition: ${this.props.transition} 0.2s ease-out;
            padding: 0;
            display: grid;
            z-index: 1;
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

          ul.slideLeft {
            left: ${this.props.isMobile === false ? "10vw" : "0"};
          }

          ul.slideUp {
            top: ${this.props.isMobile === false ? "10vh" : "0"};
          }

          ul.slideRight {
            left: ${this.props.isMobile === false ? "-150vw" : "-200vw"};
          }

          ul.slideDown {
            top: ${this.props.isMobile === false ? "-150vh" : "-200vh"};
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
        `}</style>
      </div>
    );
  }
}

export default connect(state => state)(Page);
