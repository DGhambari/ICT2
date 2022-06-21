import React from 'react';
import CourseModulesEmbeddedVars from '../../components/exercises/02_embeddedVariables';

export default {
  title: 'Exercises/02 - JSX embedded variable',
  component: CourseModulesEmbeddedVars,
};

export const Basic = () => {
  const name = 'HDip Computer Science';
  const twoModules = [
    {
      name: 'DevOps',
      noLectures: 1,
      noPracticals: 2,
    },
    {
      name: 'Enterprise Web Dev',
      noLectures: 2,
      noPracticals: 3,
    },
  ];
  return <CourseModulesEmbeddedVars modules={twoModules} course={name}/>;
};
