import figure from "./Figure"

export default ({ projects, swipeAction, transition }) => (
  <section>
    <ul className={swipeAction}>
      {projects.map((value, index) => (
        <li key={index}>{figure(value)}</li>
      ))}
    </ul>
    <style jsx>{`
      section {
        display: block;
      }
    `}</style>
  </section>
);

