"use client";

import Blog from "@/component/Blog";
import CircleLoader from "@/component/CircleLoader";
import { CoursesTimetable } from "@/component/CoursesTimetable";
import { ExperienceBanner } from "@/component/ExperienceBanner";
import { FooterGallery } from "@/component/FooterGallery";
import { Hero } from "@/component/Hero";
import { LittleBanner } from "@/component/LittleBanner";
import { LittleBannerCourse } from "@/component/LittleBannerCourse";
import { OfferSection } from "@/component/OfferSection";
import ParentTestimony from "@/component/ParentTestimony";
import { Pricing } from "@/component/Pricing";
import QuoteConsult from "@/component/QuoteConsult";
import { StaffSection } from "@/component/StaffSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <LittleBanner />
      <OfferSection />
      <LittleBannerCourse />
      <StaffSection />
      <CoursesTimetable />
      <ExperienceBanner />
      <ParentTestimony />
      <QuoteConsult />
      <Pricing />
      <Blog />
      <FooterGallery />
      <CircleLoader />
    </main>
  );
}
