import { ExperienceBanner } from "@/component/ExperienceBanner";
import { FooterGallery } from "@/component/FooterGallery";
import HeroPageSections from "@/component/HeroPAgeSections";
import { OfferSection } from "@/component/OfferSection";
import ParentTestimony from "@/component/ParentTestimony";
import QuoteConsult from "@/component/QuoteConsult";

export default function About() {
  return (
    <div>
      <HeroPageSections heroText="About Us" />
      <OfferSection />
      <ExperienceBanner />
      <ParentTestimony />
      <QuoteConsult />
      <FooterGallery />
    </div>
  );
}
