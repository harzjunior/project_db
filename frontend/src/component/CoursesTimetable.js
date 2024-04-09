import CoursesSection from "./CoursesSection";
import { SectionHeader } from "./SectionHeader";

export function CoursesTimetable() {
  return (
    <section className="ftco-section">
      <div className="container">
        <SectionHeader
          title1="Our"
          title2="Courses"
          subtitle="Separated they live in. A small river named Duden flows by 
          their place and supplies it with the necessary regelialia. 
          It is a paradisematic country"
        />

        <div className="row">
          <CoursesSection />
        </div>
      </div>
    </section>
  );
}
