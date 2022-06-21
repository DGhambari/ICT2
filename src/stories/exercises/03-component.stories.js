import React from "react";
import CourseModulesWithProps from "../../components/exercises/03_props";

export default {
  title: "Exercises/03 - component with props",
  component: CourseModulesWithProps,
};

export const Basic = () => {
  const course = "HDip Computer Science";
  const modules = [
    {
      name: "DevOps",
      noLectures: 4,
      noPracticals: 5,
    },
    {
      name: "Enterprise Web Dev",
      noLectures: 6,
      noPracticals: 7,
    },
  ];
  return <CourseModulesWithProps modules={modules} course={course} />;
};
