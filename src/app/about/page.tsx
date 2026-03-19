import { BrainCircuit, Compass, Flag, Target } from 'lucide-react'
import { ButtonLink, FinalCta, Section, SurfaceCard } from '@/components/site/marketing'

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-14 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-600">
              About
            </div>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Building the recommendation layer for packaging distribution.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              This page should feel more narrative and strategic than the others. It is about why Defft.ai exists,
              why now matters, and where the company is headed from its current beachhead.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="mailto:hello@defft.ai">Book Demo</ButtonLink>
              <ButtonLink href="/product" variant="secondary">
                Explore Product
              </ButtonLink>
            </div>
          </div>

          <SurfaceCard className="border-slate-200/90 bg-[linear-gradient(135deg,#fff_0%,#f7faf9_50%,#fff7f2_100%)] p-8">
            <p className="font-serif text-3xl leading-tight text-slate-950 sm:text-4xl">
              “The goal is not more information. The goal is better commercial judgment at scale.”
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Defft.ai starts with System of Recommendation™ because it is the clearest path to real field value for
              packaging sales leaders.
            </p>
          </SurfaceCard>
        </div>
      </section>

      <Section
        eyebrow="Mission"
        title="A mission built around preserving and scaling expert commercial judgment."
        description="The company exists to help packaging distributors turn top-seller intuition into an operating asset the rest of the team can actually use."
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {[
            {
              title: 'Preserve',
              detail: 'Keep the reasoning behind what wins from disappearing when veteran reps leave.',
              icon: Flag,
            },
            {
              title: 'Scale',
              detail: 'Make strong recommendation judgment usable by more reps across more accounts.',
              icon: Target,
            },
            {
              title: 'Guide',
              detail: 'Help managers and reps act on commercial logic, not isolated anecdotes.',
              icon: Compass,
            },
            {
              title: 'Learn',
              detail: 'Turn each meeting into feedback that sharpens the system over time.',
              icon: BrainCircuit,
            },
          ].map((item) => (
            <SurfaceCard key={item.title} className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-950">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xl font-semibold text-slate-950">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
            </SurfaceCard>
          ))}
        </div>
      </Section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-10">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
              Why now
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              The industry has enough data. What it needs is better commercial direction.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              'Veteran sellers are retiring and taking irreplaceable judgment with them.',
              'Mid-market sales teams need stronger rep productivity without relying on more guesswork.',
              'The underlying systems are already there, but they do not answer the recommendation question in time.',
            ].map((item, index) => (
              <div key={item} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Reason 0{index + 1}</div>
                <p className="mt-4 text-base leading-7 text-white/74">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Vision"
        title="The long-term vision is broader than the first wedge."
        description="System of Recommendation™ is the beachhead because it creates immediate value, clear adoption signals, and a strong category narrative."
      >
        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <SurfaceCard className="p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Current beachhead</div>
            <div className="mt-4 text-2xl font-semibold text-slate-950">System of Recommendation™</div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Help reps and managers know what to recommend, to who, and why with confidence grounded in actual
              commercial context.
            </p>
          </SurfaceCard>

          <div className="hidden items-center justify-center lg:flex">
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Expands into
            </div>
          </div>

          <SurfaceCard className="p-7">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Long-term direction</div>
            <div className="mt-4 text-2xl font-semibold text-slate-950">Intelligence operating system</div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Expand from recommendation quality into a broader operating layer that informs how packaging distributors
              learn, coach, plan, and grow.
            </p>
          </SurfaceCard>
        </div>
      </Section>

      <FinalCta />
    </>
  )
}
