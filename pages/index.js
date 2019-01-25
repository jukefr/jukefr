import { isMobile } from "react-device-detect";
import { Component } from "react";
import projects from "./projects.json";

class Intro extends Component {
  render() {
    return (
      <section>
        <h1>juke.fr</h1>
        <h3>Welcome to my portfolio.</h3>
        {figure({
          picture: isMobile
            ? "/static/mobile_scroll_vertical.gif"
            : "/static/desktop_scroll_vertical.gif",
          width: 50,
          caption: `${
            isMobile ? "Swipe" : "Scroll"
          } up and down to change project.`
        })}
        {figure({
          picture: isMobile
            ? "/static/mobile_scroll_horizontal.gif"
            : "/static/desktop_scroll_horizontal.gif",
          width: 50,
          caption: `${
            isMobile ? "Swipe left and right" : "Left Click and Right Click"
          } to learn more about a project.`
        })}
        {figure({
          picture: isMobile
            ? "/static/mobile_tap.gif"
            : "/static/desktop_click.gif",
          width: 50,
          caption: `${isMobile ? "Tap" : "Click"} anywhere to get started.`
        })}
        {!isMobile && (
          <h3>
            You can also use your keyboard arrow keys if that's your thing.
          </h3>
        )}
        <style jsx>{`
          section {
            width: 100vw;
            height: 100vh;
            margin: 0;
            padding: 0;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(255, 255, 255, 0.85);
            z-index: 5;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </section>
    );
  }
}

const figure = ({ picture, caption, width = "100%", height = "100%" }) => (
  <figure>
    <img src={picture} />
    <figcaption>{caption}</figcaption>
    <style jsx>{`
      figure {
        width: ${width};
        height: ${height};
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
      }

      img {
        width: 100%;
        height: 95%;
        margin: 0;
        padding: 0;
      }

      figcaption {
        width: 100%;
        height: 5%;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </figure>
);

const swiper = ({ projects, swipeAction, transition }) => (
  <section>
    <ul className={swipeAction}>
      {[projects[1], projects[2], projects[3]].map((value, index) => (
        <li className="project" key={index}>
          {figure(value)}
        </li>
      ))}
      {[projects[0], projects[4]].map((value, index) => (
        <li className="projects" key={index + 3}>
          {figure(value)}
        </li>
      ))}
    </ul>
    <style jsx>{`
      section {
        display: block;
      }

      ul {
        list-style: none;
        margin: 0;
        transition: ${transition} 0.3s ease-out;
        padding: 0;
        display: grid;
        width: 300vw;
        height: 300vh;
        z-index: 1;
        position: fixed;
        top: -100vh;
        left: -100vw;
        grid-template-columns: 100vw 100vw 100vw;
        grid-template-rows: 100vh 100vh 100vh;
      }

      ul.slideLeft {
        left: 0;
      }

      ul.slideUp {
        top: 0;
      }

      ul.slideRight {
        left: -200vw;
      }

      ul.slideDown {
        top: -200vh;
      }

      li.project {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        display: block;
        grid-column: 2;
        grid-row: 2;
        background: blue;
      }

      li:nth-child(1) {
        background: red;
        grid-column: 1;
      }

      li:nth-child(3) {
        background: green;
        grid-column: 3;
      }

      li.projects {
        grid-column: 2;
      }

      li:nth-child(4) {
        background: black;
        grid-row: 1;
      }

      li:nth-child(5) {
        background: pink;
        grid-row: 3;
      }
    `}</style>
  </section>
);

const handleProjects = ({ projects, indexY = 0, indexX = 0 }) => {
  const indexYA =
    indexY - Math.floor(indexY / projects.length) * projects.length;
  const indexYB =
    1 + indexY - Math.floor((indexY + 1) / projects.length) * projects.length;
  const indexYC =
    2 + indexY - Math.floor((indexY + 2) / projects.length) * projects.length;

  const projectA = projects[indexYA] || null;
  const projectB = projects[indexYB] || null;
  const projectC = projects[indexYC] || null;

  const indexXAB =
    indexX +
    1 -
    Math.floor((indexX + 1) / projectA.pictures.length) *
      projectA.pictures.length;

  const indexXBA =
    indexX -
    Math.floor(indexX / projectB.pictures.length) * projectB.pictures.length;

  const indexXBB =
    indexX +
    1 -
    Math.floor((indexX + 1) / projectB.pictures.length) *
      projectB.pictures.length;

  const indexXBC =
    indexX +
    2 -
    Math.floor((indexX + 2) / projectB.pictures.length) *
      projectB.pictures.length;

  const indexXCB =
    indexX +
    1 -
    Math.floor((indexX + 1) / projectC.pictures.length) *
      projectC.pictures.length;

  const pictureAB = projectA.pictures[indexXAB] || null;
  const pictureBA = projectB.pictures[indexXBA] || null;
  const pictureBB = projectB.pictures[indexXBB] || null;
  const pictureBC = projectB.pictures[indexXBC] || null;
  const pictureCB = projectC.pictures[indexXCB] || null;

  return [
    {
      caption: pictureAB.caption,
      picure: `/static/${projectA.name}/${pictureAB.name}`
    },
    {
      caption: pictureBA.caption,
      picure: `/static/${projectB.name}/${pictureBA.name}`
    },
    {
      caption: pictureBB.caption,
      picure: `/static/${projectB.name}/${pictureBB.name}`
    },
    {
      caption: pictureBC.caption,
      picure: `/static/${projectB.name}/${pictureBC.name}`
    },
    {
      caption: pictureCB.caption,
      picure: `/static/${projectC.name}/${pictureCB.name}`
    }
  ];
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introHide: true,
      projects: handleProjects({ projects }),
      x: 0,
      y: 0,
      transition: "all",
      swipeAction: ""
    };
    this.hideIntro = () => {
      this.setState(state => ({ ...state, introHide: true }));
    };
    this.swipeKeyboard = event => {
      let direction = "";
      switch (event.keyCode) {
        case 38:
          direction = "Up";
          break;
        case 39:
          direction = "Right";
          break;
        case 37:
          direction = "Left";
          break;
        case 40:
          direction = "Down";
          break;
        default:
          break;
      }
      this.setState(state => ({ ...state, swipeAction: `slide${direction}` }));
      this.handleSwiperTransition();
    };

    this.handleTouchStart = event => {
      this.setState(state => ({
        ...state,
        touchStart: { x: event.touches[0].clientX, y: event.touches[0].clientY }
      }));
    };

    this.handleTouchEnd = event => {
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
          // Left
          this.setState(state => ({ ...state, swipeAction: `slideLeft` }));
          this.handleSwiperTransition();
        } else {
          // Right
          this.setState(state => ({ ...state, swipeAction: `slideRight` }));
          this.handleSwiperTransition();
        }
      } else {
        if (yDirection === 1) {
          // Up
          this.setState(state => ({ ...state, swipeAction: `slideUp` }));
          this.handleSwiperTransition();
        } else {
          // Down
          this.setState(state => ({ ...state, swipeAction: `slideDown` }));
          this.handleSwiperTransition();
        }
      }
    };

    this.handleScroll = event => {
      if (event.deltaY > 0) {
        this.setState(state => ({ ...state, swipeAction: `slideUp` }));
        this.handleSwiperTransition();
      } else {
        this.setState(state => ({ ...state, swipeAction: `slideDown` }));
        this.handleSwiperTransition();
      }
    };

    this.handleClick = event => {
      event.preventDefault();
      if (event.button === 0) {
        this.setState(state => ({ ...state, swipeAction: `slideLeft` }));
        this.handleSwiperTransition();
      } else {
        this.setState(state => ({ ...state, swipeAction: `slideRight` }));
        this.handleSwiperTransition();
      }
    };

    this.handleSwiperTransition = async () => {
      const delay = t => new Promise(resolve => setTimeout(resolve, t));
      // much async such wow
      await delay(400);
      await this.setState(state => ({ ...state, transition: "none" }));
      const direction = this.state.swipeAction.replace("slide", "");
      switch (direction) {
        case "Right":
          await this.setState(state => ({ ...state, x: state.x + 1 }));
          break;
        case "Left":
          await this.setState(state => ({ ...state, x: state.x - 1 }));
          break;
        case "Up":
          await this.setState(state => ({ ...state, y: state.y - 1 }));
          break;
        case "Down":
          await this.setState(state => ({ ...state, y: state.y + 1 }));
          break;
        default:
          break;
      }
      await this.setState(state => ({
        ...state,
        swipeAction: "",
        projects: handleProjects({
          projects,
          indexX: state.x,
          indexY: state.y
        })
      }));
      await delay(100); // ser gut
      await this.setState(state => ({ ...state, transition: "all" }));
    };
  }

  componentDidMount() {
    if (localStorage.getItem("introHasPlayed") !== "true") {
      // play intro
      this.setState(state => {
        return {
          ...state,
          introHide: false
        };
      });
      localStorage.setItem("introHasPlayed", true);
    }
    document.addEventListener("keydown", this.swipeKeyboard);
    document.addEventListener("touchstart", this.handleTouchStart);
    document.addEventListener("touchend", this.handleTouchEnd);
    document.addEventListener("wheel", this.handleScroll);
    document.addEventListener("click", this.handleClick);
    document.addEventListener("contextmenu", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.swipeKeyboard);
    document.removeEventListener("touchstart", this.handleTouchStart);
    document.removeEventListener("touchend", this.handleTouchEnd);
    document.removeEventListener("wheel", this.handleScroll);
    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("contextmenu", this.handleClick);
  }

  render() {
    return (
      <div>
        {swiper({ ...this.state })}

        {!this.state.introHide && (
          <section className="introSection">
            <section
              className="introOverlay"
              onTouchStart={this.hideIntro}
              onClick={this.hideIntro}
            />
            <Intro />
          </section>
        )}
        <style global jsx>{`
          body {
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
        `}</style>
      </div>
    );
  }
}
