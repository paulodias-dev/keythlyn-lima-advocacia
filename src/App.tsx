/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SEO } from './components/SEO';
import { BaseLayout } from './components/layout/BaseLayout';
import { HeroSection } from './components/sections/HeroSection';
import { PracticeAreasSection } from './components/sections/PracticeAreasSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <>
      <SEO />
      <BaseLayout>
        <HeroSection />
        <PracticeAreasSection />
        <AboutSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </BaseLayout>
    </>
  );
}
