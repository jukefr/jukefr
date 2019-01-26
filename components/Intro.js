export default ({ isMobile }) => {
  return (
    <section>
      <h1>juke.fr</h1>
      <h3 className="welcome">Welcome to my portfolio.</h3>
      <img
        src={isMobile ? "/static/icons/swipev.svg" : "/static/icons/mousev.svg"}
        width="auto"
        height="75px"
      />
      <h3>{isMobile ? "Swipe" : "Scroll"} up and down to change project.</h3>
      <img
        src={isMobile ? "/static/icons/swipeh.svg" : "/static/icons/mouseh.svg"}
        width="auto"
        height="75px"
      />
      <h3>
        {isMobile ? "Swipe left and right" : "Left Click and Right Click"} to
        learn more about a project.
      </h3>
      <img
        src={isMobile ? "/static/icons/tap.svg" : "/static/icons/click.svg"}
        width="auto"
        height="75px"
      />
      <h3>
        {isMobile ? "Tap" : "Click"} anywhere to get started.{" "}
        {isMobile ? "" : "(or press Space)"}
      </h3>

      {!isMobile && (
        <img src="/static/icons/arrows.svg" width="auto" height="75px" />
      )}
      {!isMobile && <h3>You can also use your keyboard arrow keys.</h3>}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }

        h1 {
          border: 1px solid black;
          font-size: 21px;
          text-transform: uppercase;
          padding: 10px;
          margin-bottom: 10px;
        }

        h3 {
          margin: 0 20px;
          font-size: 18px;
          text-align: center;
          margin-bottom: 30px;
        }

        h3.welcome {
          margin-bottom: 40px;
        }

        section {
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(255, 255, 255, 0.9);
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

