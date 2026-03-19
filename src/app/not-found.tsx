import { BrandLogo, ButtonLink, Section, SurfaceCard } from '@/components/site/marketing'

export default function NotFound() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SurfaceCard className="p-10 text-center">
          <div className="mb-6 flex justify-center">
            <BrandLogo variant="icon" />
          </div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">404</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">Page not found</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The page you tried to reach does not exist in this Defft.ai site mockup.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/">Back to Home</ButtonLink>
          </div>
        </SurfaceCard>
      </div>
    </Section>
  )
}
