import { Header } from "./Header";
import { Hero } from "./Hero";
import { TrustBar } from "./TrustBar";
import { InsuranceStrip } from "./InsuranceStrip";
import { Familiar } from "./Familiar";
import { Candidate } from "./Candidate";
import { Doctor } from "./Doctor";
import { ClinicExperience } from "./ClinicExperience";
import { TeamExtras } from "./TeamExtras";
import { HowItWorks } from "./HowItWorks";
import { WhatIsTms } from "./WhatIsTms";
import { WhatToExpect } from "./WhatToExpect";
import { Benefits } from "./Benefits";
import { Conditions } from "./Conditions";
import { Insurance } from "./Insurance";
import { Faq } from "./Faq";
import { BookConsult } from "./BookConsult";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <InsuranceStrip />
        <Familiar />
        <Candidate />
        <Doctor />
        <ClinicExperience />
        <TeamExtras />
        <HowItWorks />
        <WhatIsTms />
        <WhatToExpect />
        <Benefits />
        <Conditions />
        <Insurance />
        <BookConsult />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
