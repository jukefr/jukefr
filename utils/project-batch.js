export default ({ projects, indexY = 0, indexX = 0, isMobile }) => {
  // Get index that are inside the bounds of our projects
  const projectIndexes = [...Array(3).keys()].map(
    index =>
      index +
      indexY -
      Math.floor((indexY + index) / projects.length) * projects.length
  );
  // Get an array of 3 projects inside our bounds
  const projectsInBounds = projectIndexes.map(index => projects[index]);

  // Get indexes that are inside the bouds of our project pictures
  const pictureIndexes = projectsInBounds.map(project =>
    [...Array(3).keys()].map(
      index =>
        index +
        indexX -
        Math.floor((indexX + index) / project.pictures.length) *
          project.pictures.length
    )
  );

  const result = projectsInBounds
    .map((project, projectIndex) => ({
      ...project,
      pictures: pictureIndexes[projectIndex].map(
        index => project.pictures[index]
      )
    }))
    .map(project => ({
      ...project,
      pictures: project.pictures.map(picture => ({
        ...picture,
        name: `/static/${project.name}/${
          isMobile === true ? picture.name : "desktop-" + picture.name
        }`
      }))
    }));

  // We only show row 1 picture 2, row 2 picture 1, 2, 3 and row 3 picture 2 (cross pattern in 3x3 grid)
  return [
    result[0].pictures[1],
    result[1].pictures[0],
    result[1].pictures[1],
    result[1].pictures[2],
    result[2].pictures[1]
  ];
};
