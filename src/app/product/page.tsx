import {
  ButtonLink,
  DataPipelineGraphic,
  FinalCta,
  MeetingJourney,
  RecommendationBoard,
  Section,
  SurfaceCard,
  siteIcons,
} from '@/components/site/marketing'

export default function ProductPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-14 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,#fff8f3_0%,#f5fcfb_38%,#f8fafc_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <div className="grid gap-10 px-8 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-14">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-orange-200 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-600">
                Product
              </div>
              <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                The recommendation layer built for packaging sales execution.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
                Defft.ai does not just organize information. It helps reps and managers understand the customer, the
                product, and the commercial reason a recommendation should win.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="mailto:hello@defft.ai">Book Demo</ButtonLink>
                <ButtonLink href="/how-it-works" variant="secondary">
                  See the System Flow
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Knows the customer',
                  detail: 'Reads buying patterns, objections, and account history before the rep walks in.',
                  icon: siteIcons.Users,
                },
                {
                  title: 'Knows the product',
                  detail: 'Understands fit, supplier reality, and practical packaging use cases.',
                  icon: siteIcons.Factory,
                },
                {
                  title: 'Knows what wins',
                  detail: 'Ranks recommendations by commercial logic, not generic similarity.',
                  icon: siteIcons.Target,
                },
                {
                  title: 'Knows the moment',
                  detail: 'Surfaces the recommendation when the opportunity is still actionable.',
                  icon: siteIcons.TrendingUp,
                },
              ].map((item) => (
                <SurfaceCard key={item.title} className="border-slate-200/90 bg-white/90 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-950">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 text-xl font-semibold text-slate-950">{item.title}</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Core capabilities"
        title="Three engines work together inside the same operating surface."
        description="Instead of stacking disconnected tools, the product ties preparation, recommendation, and learning into one system."
      >
        <div className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <SurfaceCard className="p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">System promise</div>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Every module should make the rep sound more credible and make the manager more confident in what the
                team is recommending.
              </p>
            </SurfaceCard>
            <SurfaceCard className="p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Operator outcome</div>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Less hunting, less guessing, and more visible reasoning behind every suggested product or bundle.
              </p>
            </SurfaceCard>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: 'Knows the Customer',
              detail: 'Reads buying behavior, account trends, objections, and branch context to frame the opportunity correctly.',
            },
            {
              title: 'Knows the Product',
              detail: 'Matches the recommendation to fit, supplier reality, margin, and practical packaging use cases.',
            },
            {
              title: 'Knows What Wins',
              detail: 'Ranks recommendations by commercial likelihood, not just broad similarity or generic AI output.',
            },
          ].map((item) => (
            <SurfaceCard key={item.title} className="p-6">
              <div className="text-xl font-semibold text-slate-950">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
            </SurfaceCard>
          ))}
        </div>
        </div>
      </Section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              Product modules
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Built as a commercial sequence, not a collection of screens.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg">
              The product changes shape as the rep moves through the selling cycle, which gives this page a different
              cadence from the others.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                step: '01',
                title: 'Meeting Prep Engine',
                detail: 'Turns fragmented account context into a clear recommendation brief before the rep walks in.',
              },
              {
                step: '02',
                title: 'Recommendation Engine',
                detail: 'Generates what to recommend next, why it fits, and how it connects to margin and expansion.',
              },
              {
                step: '03',
                title: 'Post-Meeting Intelligence',
                detail: 'Captures signal, refines the model, and gives managers a better feedback loop for coaching.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="grid gap-6 rounded-[28px] border border-white/10 bg-white/5 p-6 md:grid-cols-[120px_1fr_220px] md:items-center"
              >
                <div className="text-4xl font-semibold tracking-tight text-white/25">{item.step}</div>
                <div>
                  <div className="text-2xl font-semibold">{item.title}</div>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">{item.detail}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-4 text-sm leading-6 text-white/70">
                  Built to reduce lag between insight, recommendation, and manager feedback.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="UI preview"
        title="A product surface that feels operational, not conceptual."
        description="The interface is meant to help real field decisions, not just produce another report."
      >
        <RecommendationBoard />
      </Section>

      <Section
        eyebrow="Data and intelligence layer"
        title="Recommendations are only credible when the underlying intelligence is grounded."
        description="Defft.ai sits across your current systems, normalizes the right signals, and delivers recommendations back to the team in a usable form."
      >
        <DataPipelineGraphic />
      </Section>

      <Section
        eyebrow="Meeting walkthrough"
        title="The product has to be useful before, during, and after the customer conversation."
        description="This walkthrough anchors the workflow around the actual field sequence instead of a traditional feature list."
      >
        <MeetingJourney />
      </Section>

      <FinalCta />
    </>
  )
}
