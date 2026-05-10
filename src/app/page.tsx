"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeLargeTitles"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="HG Roof Repair"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="San Antonio's Most Trusted Roof Repair Expert"
      description="Fast, honest, and reliable roof repairs in Bexar County. Serving you with integrity, same-day service, and A+ BBB quality since inception."
      buttons={[
        {
          text: "Get Free Estimate",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:+12103960922",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/long-shot-men-working-roof_23-2149343678.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-working-with-protection-helmet-full-shot_23-2149343641.jpg",
          alt: "Man working with protection helmet full shot",
        },
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-roofers-working-with-helmets_23-2149343708.jpg",
          alt: "Full shot roofers working with helmets",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-24989.jpg",
          alt: "Closeup the roof of a house made of wooden tiles",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-men-working-roof-together_23-2149343670.jpg",
          alt: "Medium shot men working on roof together",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-working-with-earphones_23-2149343656.jpg",
          alt: "Medium shot man working with earphones",
        },
      ]}
      avatarText="Trusted by 500+ Local Homeowners"
      marqueeItems={[
        {
          type: "text",
          text: "BBB A+ Rated",
        },
        {
          type: "text",
          text: "Veteran Owned & Operated",
        },
        {
          type: "text",
          text: "24/7 Emergency Service",
        },
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text",
          text: "Satisfaction Guaranteed",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Trusted Professional"
      title="Honesty in Every Repair"
      description="Hugo Guerra personally manages every project, bringing veteran values of honor and hard work to every home in San Antonio."
      subdescription="BBB A+ rated, woman-owned, and Latino-operated, HG Roof Repair guarantees transparency and quality you can count on."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-female-florist-with-flower-photo-album_23-2147882082.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Roof Leak Repair",
          author: "HG Roof Repair",
          description: "Rapid response to stop leaks before they cause major structural damage.",
          tags: [
            "Emergency",
            "24/7",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721568.jpg",
        },
        {
          id: "s2",
          title: "Shingle Replacement",
          author: "HG Roof Repair",
          description: "Expert matching and installation of missing or damaged shingles.",
          tags: [
            "Quality",
            "Reliable",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-with-helmet-working-roof_23-2149343661.jpg",
        },
        {
          id: "s3",
          title: "Flat Roof Repair",
          author: "HG Roof Repair",
          description: "Specialized techniques for flat roof longevity and performance.",
          tags: [
            "Technical",
            "Proven",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-walking-roof_1321-1040.jpg",
        },
      ]}
      title="Professional Roofing Services"
      description="Expert repairs for every type of roof damage, available 24/7."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "General Roof Repair",
          price: "$750+",
          imageSrc: "http://img.b2bpic.net/free-photo/metallic-iron-textured-abstract-backdrop_23-2148139853.jpg",
        },
        {
          id: "p2",
          name: "Leak Inspection",
          price: "FREE Estimate",
          imageSrc: "http://img.b2bpic.net/free-photo/skateboarding-practice-freestyle-extreme-sports-concept_53876-49180.jpg",
        },
        {
          id: "p3",
          name: "Shingle Patch",
          price: "$750+",
          imageSrc: "http://img.b2bpic.net/free-photo/metal-structure_181624-31076.jpg",
        },
        {
          id: "p4",
          name: "Flat Roof Service",
          price: "$950+",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-prague_1398-2722.jpg",
        },
        {
          id: "p5",
          name: "Emergency Storm Repair",
          price: "Quote Basis",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-wooden-modern-house_23-2149343652.jpg",
        },
        {
          id: "p6",
          name: "Roof Maintenance",
          price: "$800+",
          imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-doing-his-job-with-belt_23-2149343658.jpg",
        },
      ]}
      title="Repair Solutions"
      description="Transparent pricing starting at just $750 for quality work."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          price: "$750",
          name: "Standard Repair",
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
          features: [
            "Leak detection",
            "Shingle matching",
            "Quality warranty",
          ],
        },
        {
          id: "pro",
          price: "$1,200",
          name: "Comprehensive Repair",
          buttons: [
            {
              text: "Book Now",
              href: "#contact",
            },
          ],
          features: [
            "Advanced leak seal",
            "Underlayment check",
            "Extended warranty",
          ],
        },
        {
          id: "premium",
          price: "Custom",
          name: "Full Restoration",
          buttons: [
            {
              text: "Get Quote",
              href: "#contact",
            },
          ],
          features: [
            "Structural assessment",
            "Full warranty",
            "Priority scheduling",
          ],
        },
      ]}
      title="Simple & Clear Pricing"
      description="No hidden costs. Just high-quality craftsmanship."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "129+",
          title: "Verified Reviews",
          items: [
            "4.7/5 Star Average",
          ],
        },
        {
          id: "m2",
          value: "A+",
          title: "BBB Rating",
          items: [
            "Proven Integrity",
          ],
        },
        {
          id: "m3",
          value: "24/7",
          title: "Support",
          items: [
            "Always available",
          ],
        },
      ]}
      title="Proven Quality"
      description="Trusted by hundreds of local customers."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Maria G.",
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-man-angry-expression_1194-2114.jpg",
        },
        {
          id: "2",
          name: "Robert S.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-worker-uniform-red-background-uniform-tool-mechanic-photo-house-worker-instrument-job-color_140725-155568.jpg",
        },
        {
          id: "3",
          name: "Elena M.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-cup-coffee-looking-her-boyfriend_23-2148363567.jpg",
        },
        {
          id: "4",
          name: "David W.",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-watching-movie-streaming-service_23-2149026157.jpg",
        },
        {
          id: "5",
          name: "Sarah J.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-carrying-woman-with-wheelbarrow_23-2149382171.jpg",
        },
      ]}
      cardTitle="Client Reviews"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      text="Call Hugo Today: +1 210-396-0922. Get your free estimate now and experience same-day professional service."
      buttons={[
        {
          text: "Call Hugo",
          href: "tel:+12103960922",
        },
        {
          text: "Get Free Estimate",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/full-shot-smiley-man-working-roof_23-2149343672.jpg"
      logoText="HG Roof Repair"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Roof Leak Repair",
              href: "#services",
            },
            {
              label: "Shingle Repair",
              href: "#services",
            },
            {
              label: "Flat Roof",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Hugo",
              href: "#about",
            },
            {
              label: "Reviews",
              href: "#testimonials",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 HG Roof Repair | San Antonio, TX"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
