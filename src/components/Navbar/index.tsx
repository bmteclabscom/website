import { useState } from 'react'
import { Logo } from '../UI/Logo'
import { Divide as Hamburger } from 'hamburger-react'
import { NavItem, items } from '../../contents/Navbar'
export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const showNav = () => {
    setNav((v) => !v)
  }
  return (
    <>
      <header className="fixed z-50 top-0 w-full flex justify-between items-center py-[33px] px-[60px] md:px-[100px] ">
        <Logo />
        {/* desktop nav */}
        <nav className="hidden md:flex gap-5 ">
          {items.map((item: NavItem, index: number) => (
            <a key={index} href={`#${item.link}`} className=" text-cblack-500 font-medium">
              {item.title}
            </a>
          ))}
        </nav>

        {/* hamburger */}
        {nav ? (
          <i className="fixed right-[30px] z-50 md:hidden">
            <Hamburger onToggle={showNav} />
          </i>
        ) : (
          <i className="md:hidden">
            <Hamburger onToggle={showNav} />
          </i>
        )}

        {/* mobile nav */}
        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-white z-40 duration-1000 ${
            nav ? 'right-[0px]' : 'right-[-100vw]'
          } `}
        >
          {items.map((item: NavItem, index: number) => (
            <a key={index} href={`#${item.link}`} className="underline">
              {item.title}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}
