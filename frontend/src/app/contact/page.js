import ContactFormSection from "@/component/ContactFormSection";
import ContactPage from "@/component/ContactPage";
import HeroPageSections from "@/component/HeroPAgeSections";

export default function Contact() {
  return (
    <div>
      <HeroPageSections heroText="Contact" />
      <ContactPage />
      <ContactFormSection />
    </div>
  );
}
