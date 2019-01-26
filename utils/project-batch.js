export default ({ projects, indexY = 0, indexX = 0, isMobile }) => {
  const indexYA =
    indexY - Math.floor(indexY / projects.length) * projects.length;
  const indexYB =
    1 + indexY - Math.floor((indexY + 1) / projects.length) * projects.length;
  const indexYC =
    2 + indexY - Math.floor((indexY + 2) / projects.length) * projects.length;

  const projectA = projects[indexYA] || null;
  const projectB = projects[indexYB] || null;
  const projectC = projects[indexYC] || null;

  const indexXAA =
    indexX -
    Math.floor(indexX / projectA.pictures.length) * projectA.pictures.length;

  const indexXAB =
    indexX +
    1 -
    Math.floor((indexX + 1) / projectA.pictures.length) *
      projectA.pictures.length;

  const indexXAC =
    indexX +
    2 -
    Math.floor((indexX + 2) / projectA.pictures.length) *
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

  const indexXCA =
    indexX -
    Math.floor(indexX / projectC.pictures.length) * projectC.pictures.length;

  const indexXCB =
    indexX +
    1 -
    Math.floor((indexX + 1) / projectC.pictures.length) *
      projectC.pictures.length;

  const indexXCC =
    indexX +
    2 -
    Math.floor((indexX + 2) / projectC.pictures.length) *
      projectC.pictures.length;

  const pictureAA = projectA.pictures[indexXAA] || null;
  const pictureAB = projectA.pictures[indexXAB] || null;
  const pictureAC = projectA.pictures[indexXAC] || null;
  const pictureBA = projectB.pictures[indexXBA] || null;
  const pictureBB = projectB.pictures[indexXBB] || null;
  const pictureBC = projectB.pictures[indexXBC] || null;
  const pictureCA = projectC.pictures[indexXCA] || null;
  const pictureCB = projectC.pictures[indexXCB] || null;
  const pictureCC = projectC.pictures[indexXCC] || null;

  return [
    //{
    //   caption: pictureAA.caption,
    //  picture: `/static/${projectA.name}/${pictureAA.name}`
    //},
    {
      caption: pictureAB.caption,
      picture: `/static/${projectA.name}/${
        isMobile === true ? pictureAB.name : "desktop-" + pictureAB.name
      }`
    },
    //{
    //  caption: pictureAC.caption,
    //  picture: `/static/${projectA.name}/${pictureAC.name}`
    //},
    {
      caption: pictureBA.caption,
      picture: `/static/${projectB.name}/${
        isMobile === true ? pictureBA.name : "desktop-" + pictureBA.name
      }`
    },
    {
      caption: pictureBB.caption,
      picture: `/static/${projectB.name}/${
        isMobile === true ? pictureBB.name : "desktop-" + pictureBB.name
      }`
    },
    {
      caption: pictureBC.caption,
      picture: `/static/${projectB.name}/${
        isMobile === true ? pictureBC.name : "desktop-" + pictureBC.name
      }`
    },
    //{
    //  caption: pictureCA.caption,
    //  picture: `/static/${projectC.name}/${pictureCA.name}`
    //},
    {
      caption: pictureCB.caption,
      picture: `/static/${projectC.name}/${
        isMobile === true ? pictureCB.name : "desktop-" + pictureCB.name
      }`
    }
    //{
    //  caption: pictureCC.caption,
    //  picure: `/static/${projectC.name}/${pictureCC.name}`
    //}
  ];
};
