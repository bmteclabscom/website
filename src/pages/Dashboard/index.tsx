import { About } from '@/components/Dashboard/About'
import { Contact } from '@/components/Dashboard/Contact'
import { Home } from '@/components/Dashboard/Home'
import { Projects } from '@/components/Dashboard/Projects'
import { Services } from '@/components/Dashboard/Services'
import { Team } from '@/components/Dashboard/Team'
import { ClientReview } from '@components/Dashboard/ClietReview'

export const Dashboard = () => {
  return (
    <div className="">
      <Home />
      <Services />
      <About />
      <Projects />
      <Team />
      <ClientReview />
      <Contact />
    </div>
  )
}
