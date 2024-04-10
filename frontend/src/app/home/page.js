"use client";

import BlogPage from "@/component/BlogPage";
import CircleLoader from "@/component/CircleLoader";
import { CoursesTimetable } from "@/component/CoursesTimetable";
import { ExperienceBanner } from "@/component/ExperienceBanner";
import { FooterGallery } from "@/component/FooterGallery";
import { Hero } from "@/component/Hero";
import { LittleBanner } from "@/component/LittleBanner";
import { LittleBannerCourse } from "@/component/LittleBannerCourse";
import { OfferSection } from "@/component/OfferSection";
import ParentTestimony from "@/component/ParentTestimony";
import { PricingPage } from "@/component/PricingPage";
import QuoteConsult from "@/component/QuoteConsult";
import { StaffSection } from "@/component/StaffSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LittleBanner />
      <OfferSection />
      <LittleBannerCourse />
      <StaffSection isHomePage={true} />
      <CoursesTimetable isHomePage={true} />
      <ExperienceBanner />
      <ParentTestimony />
      <QuoteConsult />
      <PricingPage />
      <BlogPage isHomePage={true} />
      <FooterGallery />
      <CircleLoader />
    </>
  );
}
