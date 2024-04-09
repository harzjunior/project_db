import { courseData } from "../../utils/courseData";
import { CourseItem } from "./CourseItem";

function CoursesSection() {
  return (
    <>
      {courseData.map((course, index) => (
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
