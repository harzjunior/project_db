import CoursesSection from "./CoursesSection";
import { SectionHeader } from "./SectionHeader";

export function CoursesTimetable({ isHomePage }) {
  return (
    <section className="ftco-section">
      <div className="container">
        {isHomePage && (
          <SectionHeader
            title1="Our"
            title2="Courses"
            subtitle="Separated they live in. A small river named Duden flows by 
          their place and supplies it with the necessary regelialia. 
          It is a paradisematic country"
          />
        )}

        <div className="row">
          <CoursesSection isHomePage={isHomePage} />
        </div>
      </div>
    </section>
  );
}
