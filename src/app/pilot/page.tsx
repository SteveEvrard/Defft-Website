import {
  FinalCta,
  PageHero,
  PilotFormMockup,
  ProcessSteps,
  Section,
  SurfaceCard,
  siteIcons,
} from '@/components/site/marketing'

const pilotSteps = [
  {
    title: 'Choose the focus',
    detail: 'Identify the accounts, product lines, and selling moments that are creating the most guesswork.',
    icon: siteIcons.Users,
  },
  {
    title: 'Walk the workflow',
    detail: 'See how Defft.ai connects the relevant signals and returns recommendation guidance to the team.',
    icon: siteIcons.DatabaseZap,
  },
  {
    title: 'Review the impact',
    detail: 'Align on the metrics, rollout shape, and commercial outcomes that matter most to your sales leaders.',
    icon: siteIcons.BarChart3,
  },
]

export default function PilotPage() {
  return (
    <>
      <PageHero
        badge="Demo"
        title="See Defft.ai on the selling moments that matter most"
        description="Use this page as a focused demo-request experience. Start with the accounts, products, and manager questions that will make recommendation quality easiest to evaluate."
        primaryLabel="Book Demo"
      />

      <Section
        eyebrow="Demo flow"
        title="A focused commercial walkthrough, not a generic product tour."
        description="The conversation should quickly show where guesswork is costing the team and how Defft.ai changes the recommendation moment."
      >
        <ProcessSteps steps={pilotSteps} />
      </Section>

      <Section
        eyebrow="What you get"
        title="A demo experience designed for decision makers."
        description="Every conversation should leave the team with more clarity on fit, adoption potential, and revenue impact."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: 'Before and after metrics',
              detail: 'See whether recommendation acceptance, order value, and commercial conversion move in the right direction.',
            },
            {
              title: 'Rep performance insights',
              detail: 'Understand where sellers followed the system, where they ignored it, and how confidence evolved.',
            },
            {
              title: 'Revenue impact',
              detail: 'Quantify the effect on expansion, mix quality, and overall selling leverage per rep.',
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
        eyebrow="Request a demo"
        title="Start with a realistic demo conversation."
        description="Use the form below as a launch-ready mockup for the conversion experience."
      >
        <PilotFormMockup />
      </Section>

      <FinalCta
        title="Ready to see Defft.ai on your accounts and products?"
        description="Book a focused demo around the team, product mix, and revenue moments you care about most."
      />
    </>
  )
}
