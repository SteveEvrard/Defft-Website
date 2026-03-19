import { Route, Switch } from 'wouter'
import { useEffect } from 'react'
import { SiteLayout } from './components/layout/SiteLayout'
import { HomePage } from './pages/Home'
import { PhilosophyPage } from './pages/Philosophy'
import { EnginePage } from './pages/Engine'
import { CategoryPage } from './pages/Category'
import { StrategyPage } from './pages/Strategy'
import { RoadmapPage } from './pages/Roadmap'
import { TeamPage } from './pages/Team'
import { RoiPage } from './pages/Roi'
import { DemoPage } from './pages/Demo'
import { NotFoundPage } from './pages/NotFound'
import { RedirectTo } from './components/routing/RedirectTo'

export default function App() {
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace('#', '').trim()
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // initial hash on first load
    window.setTimeout(onHash, 50)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/philosophy" component={PhilosophyPage} />
        <Route path="/engine" component={EnginePage} />
        <Route path="/category" component={CategoryPage} />
        <Route path="/strategy" component={StrategyPage} />
        <Route path="/roadmap" component={RoadmapPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/roi" component={RoiPage} />
        <Route path="/demo" component={DemoPage} />

        <Route path="/manifesto">
          <RedirectTo to="/philosophy#manifesto" />
        </Route>
        <Route path="/pov">
          <RedirectTo to="/category#pov" />
        </Route>
        <Route path="/calculator">
          <RedirectTo to="/roi" />
        </Route>

        <Route component={NotFoundPage} />
      </Switch>
    </SiteLayout>
  )
}
