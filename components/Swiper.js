import card from "./Card";

export default ({ projects, swipeAction, transition, className }) => (
  <section>
    <ul className={className + " " + swipeAction}>
      {projects.map((value, index) => (
        <li key={index}>{card(value)}</li>
      ))}
    </ul>
    <style jsx>{`
      section {
        display: block;
      }
    `}</style>
  </section>
);
