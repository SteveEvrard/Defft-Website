import {
  ButtonLink,
  DataPipelineGraphic,
  FinalCta,
  Section,
  SurfaceCard,
  siteIcons,
} from '@/components/site/marketing'

const steps = [
  {
    title: 'Connect data',
    detail: 'Start with the account, product, and supplier systems the branch already depends on.',
    icon: siteIcons.DatabaseZap,
  },
  {
    title: 'Normalize',
    detail: 'Clean up product and customer context so recommendations can be compared with confidence.',
    icon: siteIcons.Factory,
  },
  {
    title: 'Build intelligence',
    detail: 'Encode the patterns behind what veteran reps would recommend and when.',
    icon: siteIcons.BrainCircuit,
  },
  {
    title: 'Deliver recommendations',
    detail: 'Return the output to reps and managers in a workflow-ready format.',
    icon: siteIcons.Target,
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              How It Works
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              From scattered sales context to recommendation intelligence.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600">
              This page should feel more process-driven than the others. It is laid out like an implementation journey
              so a sales leader can understand the path from data to live recommendation output.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="mailto:hello@defft.ai">Book Demo</ButtonLink>
              <ButtonLink href="/product" variant="secondary">
                See Product Detail
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <SurfaceCard key={step.title} className="grid gap-6 p-0 md:grid-cols-[140px_1fr]">
                <div className="flex items-center justify-center rounded-[28px] bg-[linear-gradient(180deg,#f7faf9_0%,#eef7f6_100%)] p-8 md:min-h-[220px]">
                  <div className="text-center">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Step {index + 1}
                    </div>
                    <div className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">0{index + 1}</div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-950">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 text-2xl font-semibold text-slate-950">{step.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.detail}</p>
                  <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    {index === 0 && 'Scope the systems that matter for the chosen branch, accounts, and product families.'}
                    {index === 1 && 'Turn scattered field knowledge into a cleaner commercial data shape.'}
                    {index === 2 && 'Model the logic that strong reps use when deciding what to recommend and why.'}
                    {index === 3 && 'Put recommendations back in front of the team in a way they can actually act on.'}
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="System architecture"
        title="The architecture is simple on purpose."
        description="Your source systems stay intact. Defft.ai becomes the layer that normalizes inputs and returns usable recommendations."
      >
        <DataPipelineGraphic />
      </Section>

      <section className="bg-[linear-gradient(180deg,#fff8f3_0%,#f8fafc_100%)] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-orange-200 bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-600">
              Deployment readiness
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Built to be piloted without creating organizational drag.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              The rollout mechanics should feel concrete to operators, not abstract to executives.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {[
              {
                title: 'Pilot scope',
                detail: 'Start with one branch, one region, or a selected rep cohort and a well-defined set of accounts.',
              },
              {
                title: 'System fit',
                detail: 'Map only the data sources needed to create trustworthy recommendations for the chosen use case.',
              },
              {
                title: 'Manager adoption',
                detail: 'Give branch leaders a visible reason to trust the system and coach from its output.',
              },
              {
                title: 'Measurement',
                detail: 'Track recommendation acceptance, rep ramp, revenue quality, and knowledge retention signals from day one.',
              },
            ].map((item) => (
              <SurfaceCard key={item.title} className="p-6">
                <div className="text-xl font-semibold text-slate-950">{item.title}</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
