import {
  ButtonLink,
  ComparisonGrid,
  FinalCta,
  HeroRecommendationPanel,
  HomeTeaserStats,
  KnowledgeMortalityPanel,
  MetricsRail,
  ProcessSteps,
  RecommendationBoard,
  Section,
  SurfaceCard,
  UseCaseCards,
  siteIcons,
} from '@/components/site/marketing'

const processSteps = [
  {
    title: 'Connect data',
    detail: 'Bring together ERP, CRM, supplier, and account history without forcing the team into another workflow.',
    icon: siteIcons.DatabaseZap,
  },
  {
    title: 'Normalize',
    detail: 'Standardize customer, product, and pricing context so recommendations can be trusted branch to branch.',
    icon: siteIcons.Factory,
  },
  {
    title: 'Build intelligence',
    detail: 'Model what top sellers know about accounts, buying patterns, and what tends to win.',
    icon: siteIcons.BrainCircuit,
  },
  {
    title: 'Deliver recommendations',
    detail: 'Put the next best recommendation in front of reps and managers before opportunity value disappears.',
    icon: siteIcons.Target,
  },
]

const roiMetrics = [
  {
    label: 'Avg Order Value',
    value: '+12%',
    note: 'Sample pilot benchmark from better-fit bundles and cleaner expansion timing.',
  },
  {
    label: 'Recommendation Acceptance Rate',
    value: '71%',
    note: 'Illustrative share of recommendations accepted by reps after initial branch onboarding.',
  },
  {
    label: 'Rep Ramp Time',
    value: '-35%',
    note: 'New sellers become customer-ready faster when veteran reasoning is visible and reusable.',
  },
  {
    label: 'Revenue per Rep',
    value: '+9%',
    note: 'Higher output per rep when the branch stops relying on memory alone.',
  },
]

const useCaseItems = [
  {
    title: 'New Customer Meetings',
    detail: 'Walk in with a recommendation and reason, not a generic product pitch.',
    icon: siteIcons.Handshake,
  },
  {
    title: 'Account Expansion',
    detail: 'Surface the next product family, bundle, or timing signal before a competitor does.',
    icon: siteIcons.TrendingUp,
  },
  {
    title: 'Rep Training',
    detail: 'Give new reps the logic behind what veterans would recommend and why.',
    icon: siteIcons.BookOpenCheck,
  },
  {
    title: 'Supplier Alignment',
    detail: 'Match recommendations to inventory, strategic suppliers, and margin goals.',
    icon: siteIcons.Factory,
  },
]

export default function HomePage() {
  return (
    <>
      <Section className="pt-12 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-700">
              System of Recommendation™ for packaging distributors
            </div>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Stop Running Your Sales Team on Guesswork
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600">
              Defft.ai is the first System of Recommendation™ built for packaging distributors. It helps sales teams
              know what to sell, to who, and why so reps can move with the confidence of your best veterans.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="mailto:hello@defft.ai">Book Demo</ButtonLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <div>Built for Sales Managers, Branch Managers, and Regional Sales Leaders</div>
              <div>Focused on packaging distribution, not generic AI hype</div>
            </div>
          </div>
          <HeroRecommendationPanel />
        </div>
      </Section>

      <Section
        eyebrow="Category framing"
        title="Most teams do not have a data problem. They have a decision problem."
        description="Packaging distributors already have customer records, order history, supplier context, and veteran seller intuition. The problem is that none of it shows up clearly enough in the selling moment to guide the next recommendation."
        align="center"
      >
        <HomeTeaserStats />
      </Section>

      <Section
        id="problem"
        eyebrow="The Guesswork Tax"
        title="Deals slip away when the wrong recommendation shows up in the moment."
        description="The Guesswork Tax compounds across every branch when sellers depend on memory, partial information, or late-stage inspection instead of recommendation intelligence."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: 'Wrong product recommended',
              detail: 'The rep says something plausible, but not the product or bundle most likely to win.',
              accent: 'text-orange-600',
            },
            {
              title: 'Missed expansion opportunity',
              detail: 'The best cross-sell signal is hidden in account behavior, supplier timing, or veteran memory.',
              accent: 'text-teal-700',
            },
            {
              title: 'Customer goes elsewhere',
              detail: 'The buyer leaves the conversation without a strong reason to stay with the incumbent distributor.',
              accent: 'text-slate-950',
            },
          ].map((card, index) => (
            <SurfaceCard key={card.title} className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Signal {index + 1}</div>
                <div className={`text-sm font-semibold ${card.accent}`}>Preventable</div>
              </div>
              <div className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{card.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.detail}</p>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                {index === 0 &&
                  'Recommendation quality is the make-or-break variable, not rep effort alone.'}
                {index === 1 &&
                  'Expansion value disappears quickly when the system cannot surface timing and fit together.'}
                {index === 2 &&
                  'A better recommendation often beats a longer relationship when pressure is high.'}
              </div>
            </SurfaceCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The structural problem"
        title="The Knowledge Mortality Problem™ is what turns sales turnover into revenue leakage."
        description="When experienced reps retire, the branch loses far more than relationship history. It loses the judgment behind which product should be recommended to which customer and why."
      >
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="space-y-5">
            <SurfaceCard className="p-6">
              <div className="text-xl font-semibold text-slate-950">What disappears</div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>The hidden logic behind product fit, timing, and buyer language.</li>
                <li>The pattern recognition that makes top sellers sound instantly credible.</li>
                <li>The branch-level memory of where margin and expansion are truly available.</li>
              </ul>
            </SurfaceCard>
            <SurfaceCard className="p-6">
              <div className="text-xl font-semibold text-slate-950">What Defft.ai preserves</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Recommendation logic becomes visible, teachable, and operational so managers are not left rebuilding
                instinct from scratch every time a veteran exits.
              </p>
            </SurfaceCard>
          </div>
          <KnowledgeMortalityPanel />
        </div>
      </Section>

      <Section
        eyebrow="New category"
        title="Defft.ai is not another CRM add-on. It is a System of Recommendation™."
        description="This category exists to answer the question every packaging sales leader cares about in the field: what should this rep recommend right now, and why should that recommendation win?"
      >
        <ComparisonGrid />
      </Section>

      <Section
        id="product"
        eyebrow="Product preview"
        title="A realistic recommendation workspace for reps and managers."
        description="The product experience is designed to feel like a high-trust operating surface. Clear context, ranked recommendations, rationale, and margin signals all live in one place."
      >
        <RecommendationBoard />
      </Section>

      <Section
        eyebrow="ROI signals"
        title="The business case is not theoretical."
        description="A System of Recommendation™ should show up in better decisions, faster rep readiness, and stronger revenue quality. These sample pilot metrics show the shape of that impact."
      >
        <MetricsRail items={roiMetrics} />
      </Section>

      <Section
        id="how-it-works"
        eyebrow="How it works"
        title="Four steps from fragmented data to trusted recommendations."
        description="The implementation path is straightforward enough for a pilot and structured enough for enterprise credibility."
      >
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section
        id="use-cases"
        eyebrow="Use cases"
        title="Built for the moments where recommendation quality matters most."
        description="Defft.ai is designed around the field realities of packaging distribution, not generic sales software categories."
      >
        <UseCaseCards items={useCaseItems} />
      </Section>

      <Section
        eyebrow="Differentiation"
        title="Defft.ai defines a category because it solves a different problem."
        description="It is not trying to be your CRM, your analytics stack, or a generic AI assistant. It exists to recommend what the rep should do next and make the reasoning trustworthy."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: 'Not CRM',
              detail: 'CRMs store activity. Defft.ai improves recommendation quality before the rep takes action.',
            },
            {
              title: 'Not analytics',
              detail: 'Dashboards explain what happened. Defft.ai guides what should happen next in the selling moment.',
            },
            {
              title: 'Not generic AI',
              detail: 'Generic AI can generate text. Defft.ai generates recommendation judgment grounded in packaging distribution.',
            },
          ].map((item) => (
            <SurfaceCard key={item.title} className="p-6">
              <div className="text-xl font-semibold text-slate-950">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
            </SurfaceCard>
          ))}
        </div>
      </Section>

      <FinalCta
        title="See how Defft.ai improves recommendation quality."
        description="Book a demo to walk through the accounts, product lines, and revenue moments where stronger recommendations matter most."
      />
    </>
  )
}
