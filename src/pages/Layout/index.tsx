import { ReactNode } from 'react'
import { Navbar, Footer, Container } from '@/components'
import './index.css'
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
export default Layout
