import { Link } from 'wouter'
import { ButtonLink } from '../ui/button'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="font-display text-lg font-semibold tracking-tight text-white">
              Defft.ai
            </div>
            <p className="mt-2 max-w-sm text-sm text-white/65">
              Recommendation, not guesswork. The System of Recommendation for packaging
              distributors.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <ButtonLink href="/roi" variant="primary" size="md">
                Run ROI Calculator
              </ButtonLink>
              <ButtonLink href="/demo" variant="secondary" size="md">
                Book a demo
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <FooterCol title="Product">
              <FooterLink href="/engine">Engine</FooterLink>
              <FooterLink href="/category#pov">Category POV</FooterLink>
              <FooterLink href="/roi">ROI Calculator</FooterLink>
            </FooterCol>
            <FooterCol title="Company">
              <FooterLink href="/team">Team</FooterLink>
              <FooterLink href="/roadmap">Roadmap</FooterLink>
              <FooterLink href="/demo">Book a demo</FooterLink>
            </FooterCol>
            <FooterCol title="Thinking">
              <FooterLink href="/philosophy#manifesto">Manifesto</FooterLink>
              <FooterLink href="/strategy">Strategy</FooterLink>
              <FooterLink href="/philosophy">Philosophy</FooterLink>
            </FooterCol>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Defft.ai. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a className="hover:text-white/70" href="mailto:hello@defft.ai">
              hello@defft.ai
            </a>
            <span className="text-white/25">•</span>
            <Link href="/philosophy" className="hover:text-white/70">
              Philosophy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol(props: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm font-semibold text-white">{props.title}</div>
      <div className="mt-3 grid gap-2 text-sm text-white/70">{props.children}</div>
    </div>
  )
}

function FooterLink(props: { href: string; children: React.ReactNode }) {
  return (
    <Link href={props.href} className="hover:text-white">
      {props.children}
    </Link>
  )
}

