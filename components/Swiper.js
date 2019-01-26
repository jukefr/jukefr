import figure from "./figure"

export default ({ projects, swipeAction, transition, className }) => (
  <section>
    <ul className={className + ' ' + swipeAction}>
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

