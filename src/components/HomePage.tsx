import { Header } from "./Header";
import { Hero } from "./Hero";
import { InsuranceStrip } from "./InsuranceStrip";
import { Familiar } from "./Familiar";
import { Doctor } from "./Doctor";
import { TeamExtras } from "./TeamExtras";
import { HowItWorks } from "./HowItWorks";
import { WhatIsTms } from "./WhatIsTms";
import { Benefits } from "./Benefits";
import { Conditions } from "./Conditions";
import { Insurance } from "./Insurance";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { FloatingCTA } from "./FloatingCTA";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <InsuranceStrip />
        <Familiar />
        <Doctor />
        <TeamExtras />
        <HowItWorks />
        <WhatIsTms />
        <Benefits />
        <Conditions />
        <Insurance />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
