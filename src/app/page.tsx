import { cn } from "@/lib/utils"
import { ModeToggle } from "./_components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"

import IntroSection from "./_components/intro-section"
import AboutSection from "./_components/about-section"
import FeatureSection from "./_components/feature.section"
import FaqSection from "./_components/faq.section"

export default function Home() {
  return (
    <main className="">
      <IntroSection />
      <AboutSection />
      <FeatureSection />
      <FaqSection />
    </main>
  )
}
