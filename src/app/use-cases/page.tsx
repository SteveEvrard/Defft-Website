import { ButtonLink, FinalCta, SurfaceCard } from '@/components/site/marketing'

const useCases = [
  {
    title: 'New Customer Meetings',
    problem:
      'Reps often walk into early conversations with a broad catalog story instead of a sharp recommendation that shows immediate relevance.',
    outcome:
      'Defft.ai prepares the rep with the product, rationale, and positioning most likely to establish credibility fast.',
    ui: [
      'Suggested starter bundle',
      'Buyer pain points and likely objections',
      'Recommended talk track for the first meeting',
    ],
  },
  {
    title: 'Existing Account Expansion',
    problem:
      'Expansion chances are easy to miss when account behavior, supplier timing, and product fit are not connected.',
    outcome:
      'Defft.ai surfaces the next best cross-sell or bundle recommendation before the opportunity cools off.',
    ui: ['Expansion score by account', 'Margin upside estimate', 'Next best product family'],
  },
  {
    title: 'New Rep Ramp / Enablement',
    problem:
      'New sellers inherit territory and pressure immediately, but not the pattern recognition of the branch veterans.',
    outcome:
      'Defft.ai compresses ramp by making top-seller recommendation logic visible and usable in the field.',
    ui: ['Veteran-aligned recommendation cues', 'Rep confidence tracker', 'Manager coaching prompts'],
  },
  {
    title: 'Supplier Alignment',
    problem:
      'Strategic supplier relationships underperform when the field is not guided toward the best-fit products at the right time.',
    outcome:
      'Defft.ai links account opportunity to supplier availability and strategic priorities so recommendations support both sales and portfolio goals.',
    ui: ['Supplier-backed opportunities', 'Inventory-aware recommendations', 'Quarter planning view'],
  },
]

export default function UseCasesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
          <SurfaceCard className="h-fit border-slate-200/90 p-8 xl:sticky xl:top-28">
            <div className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-700">
              Use Cases
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Recommendation intelligence for the moments that decide the account.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600">
              This page should feel less like a generic overview and more like a field guide. Each use case gets its
              own editorial block, outcome framing, and supporting UI pattern.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="mailto:hello@defft.ai">Book Demo</ButtonLink>
              <ButtonLink href="/product" variant="secondary">
                Explore Product
              </ButtonLink>
            </div>
          </SurfaceCard>

          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <SurfaceCard
                key={useCase.title}
                className="overflow-hidden border-slate-200/90 p-0"
              >
                <div className="grid gap-px bg-slate-200 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="bg-[linear-gradient(180deg,#fff8f3_0%,#fff_100%)] p-8">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Use case 0{index + 1}
                    </div>
                    <div className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{useCase.title}</div>
                    <div className="mt-8 space-y-5">
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Problem</div>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{useCase.problem}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Outcome</div>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{useCase.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 0 ? 'bg-slate-950 p-8 text-white' : 'bg-[linear-gradient(180deg,#f3faf9_0%,#f8fafc_100%)] p-8'}>
                    <div className={index % 2 === 0 ? 'text-sm text-white/60' : 'text-sm text-slate-500'}>
                      Supporting UI mockup
                    </div>
                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                      {useCase.ui.map((item) => (
                        <div
                          key={item}
                          className={
                            index % 2 === 0
                              ? 'rounded-3xl border border-white/10 bg-white/5 p-5'
                              : 'rounded-3xl border border-slate-200 bg-white p-5'
                          }
                        >
                          <div
                            className={
                              index % 2 === 0
                                ? 'text-xs uppercase tracking-[0.18em] text-white/45'
                                : 'text-xs uppercase tracking-[0.18em] text-slate-400'
                            }
                          >
                            Module
                          </div>
                          <div className={index % 2 === 0 ? 'mt-3 text-base font-semibold text-white' : 'mt-3 text-base font-semibold text-slate-900'}>
                            {item}
                          </div>
                          <p className={index % 2 === 0 ? 'mt-3 text-sm leading-6 text-white/70' : 'mt-3 text-sm leading-6 text-slate-600'}>
                            Recommendation-driven guidance shaped for this exact sales situation.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
