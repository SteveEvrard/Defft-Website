import {
  CaseStudyCards,
  FinalCta,
  MetricsRail,
  PageHero,
  Section,
  SurfaceCard,
} from '@/components/site/marketing'

const proofMetrics = [
  {
    label: 'Recommendation Acceptance Rate',
    value: '68%',
    note: 'Illustrative pilot signal showing reps trust and use the recommendations in live selling scenarios.',
  },
  {
    label: 'Knowledge Retention Rate',
    value: '83%',
    note: 'Sample measure of veteran reasoning preserved and reused in active accounts and coaching workflows.',
  },
]

export default function ProofPage() {
  return (
    <>
      <PageHero
        badge="Proof"
        title="Evidence that recommendation quality can become a system."
        description="Defft.ai is designed to earn trust from veteran sellers, managers, and commercial leaders. Proof comes from recommendation alignment, measurable adoption, and better field decisions."
      />

      <Section
        eyebrow="Case studies"
        title="Illustrative commercial outcomes for packaging distribution teams."
        description="These examples show the types of business improvements a System of Recommendation™ is built to create."
      >
        <CaseStudyCards />
      </Section>

      <Section
        eyebrow="Veteran validation"
        title="The strongest proof moment is still human."
        description="When an experienced rep sees the recommendation and says it matches their own judgment, the system crosses from theory into credibility."
        align="center"
      >
        <div className="mx-auto max-w-4xl">
          <SurfaceCard className="p-10 text-center">
            <p className="font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">
              “That’s exactly what I would have said.”
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              That quote matters because it means veteran intuition is no longer trapped in a few individuals. It is
              becoming a repeatable operating asset.
            </p>
          </SurfaceCard>
        </div>
      </Section>

      <Section
        eyebrow="Metrics"
        title="Recommendation trust should show up in measurable operating signals."
        description="Defft.ai is meant to improve how often recommendations are accepted and how well seller knowledge survives turnover."
      >
        <MetricsRail items={proofMetrics} />
      </Section>

      <FinalCta />
    </>
  )
}
