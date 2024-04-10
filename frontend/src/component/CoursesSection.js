import { courseData } from "../../utils/courseData";
import { CourseItem } from "./CourseItem";

function CoursesSection({ isHomePage }) {
  const displayCoursesData = isHomePage ? courseData.slice(0, 4) : courseData;

  return (
    <>
      {displayCoursesData.map((course, index) => (
        <CourseItem
          key={index}
          imgSrc={course.imgSrc}
          title={course.title}
          classTime={course.classTime}
          description={course.description}
        />
      ))}
    </>
  );
}

export default CoursesSection;
