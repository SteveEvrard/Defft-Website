import {
  ButtonLink,
  FinalCta,
  KnowledgeMortalityPanel,
  PageHero,
  Section,
  SurfaceCard,
} from '@/components/site/marketing'

export default function ProblemPage() {
  return (
    <>
      <PageHero
        badge="Problem"
        title="The Hidden Cost of Guesswork in Sales"
        description="Packaging distributors lose deals when reps cannot confidently recommend the right product in the moment. The problem looks like missed opportunities on the surface, but the deeper issue is that seller judgment is not operationalized."
      />

      <Section
        eyebrow="The Guesswork Tax"
        title="The Guesswork Tax is what happens when recommendation quality depends on memory."
        description="A rep may have product knowledge and customer history, yet still miss the recommendation that best fits the account, the buyer, and the timing. That miss is expensive."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            'The wrong product or bundle gets recommended.',
            'The best expansion opportunity goes unseen.',
            'The customer leaves without a compelling next step.',
          ].map((item) => (
            <SurfaceCard key={item} className="p-6 text-base leading-7 text-slate-700">
              {item}
            </SurfaceCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why it happens"
        title="Guesswork survives because the underlying selling system is incomplete."
        description="Sales teams are often trying to sell out of fragmented context instead of usable intelligence."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: 'Fragmented data',
              detail: 'Account details, order history, supplier context, and margin signals live in different places.',
            },
            {
              title: 'Human memory reliance',
              detail: 'The branch depends on veteran reps to remember what wins instead of making that logic accessible.',
            },
            {
              title: 'No system intelligence',
              detail: 'There is no trusted layer that answers what to recommend next and why.',
            },
          ].map((item) => (
            <SurfaceCard key={item.title} className="p-6">
              <div className="text-xl font-semibold text-slate-950">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
            </SurfaceCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The structural villain"
        title="The Knowledge Mortality Problem™ makes the branch weaker every time expertise walks out the door."
        description="Retirement and turnover do not just remove people. They remove pattern recognition, recommendation logic, and the language that top sellers use to win."
      >
        <KnowledgeMortalityPanel />
      </Section>

      <Section
        eyebrow="Why the usual fixes fall short"
        title="CRM, training, and hiring still leave the field without a live recommendation system."
        description="Each of these can help, but none of them solve the moment-of-sale decision problem on their own."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: 'CRM',
              detail: 'Records activity and account notes, but rarely tells the rep what should be recommended right now.',
            },
            {
              title: 'Training',
              detail: 'Improves baseline capability, but it does not recreate veteran judgment at the point of need.',
            },
            {
              title: 'Hiring',
              detail: 'Adds headcount, but not a scalable system for preserving and applying institutional knowledge.',
            },
          ].map((item) => (
            <SurfaceCard key={item.title} className="p-6">
              <div className="text-xl font-semibold text-slate-950">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
            </SurfaceCard>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SurfaceCard className="flex flex-col gap-5 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-2xl font-semibold tracking-tight text-slate-950">
              Move from defining the problem to seeing the system.
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              The next step is a product built around recommendation quality, not record keeping.
            </p>
          </div>
          <ButtonLink href="/product">See the Product</ButtonLink>
        </SurfaceCard>
      </Section>

      <FinalCta />
    </>
  )
}
