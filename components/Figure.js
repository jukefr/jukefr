export default ({ name, caption, width = "100%", height = "100%" }) => (
  <figure>
    <img src={name} />
    <figcaption>
      <h3>{caption}</h3>
    </figcaption>
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
        height: 92%;
        margin: 0;
        padding: 0;
      }

      figcaption {
        width: 100%;
        height: 8%;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </figure>
);
