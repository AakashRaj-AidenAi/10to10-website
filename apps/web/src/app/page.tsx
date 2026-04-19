import { Hero } from "@/components/hero";
import { StatsStrip } from "@/components/stats-strip";
import { ZoneGrid } from "@/components/zone-grid";
import { WhyUs } from "@/components/why-us";
import { HowItWorks } from "@/components/how-it-works";
import { MembershipStrip } from "@/components/membership-strip";
import { CtaBanner } from "@/components/cta-banner";
import { Testimonials } from "@/components/testimonials";
import { FinalCta } from "@/components/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ZoneGrid />
      <WhyUs />
      <HowItWorks />
      <MembershipStrip />
      <CtaBanner />
      <Testimonials />
      <FinalCta />
    </>
  );
}
