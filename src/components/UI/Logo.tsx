import LogoImage from '@/assets/icons/logo.png'
import LogoImageWhite from '@assets/icons/logo_white.png'
import React from 'react'
type LogoProp = {
  color?: 'white'
}
export const Logo: React.FC<LogoProp> = ({ color }: LogoProp) => {
  if (color === 'white') {
    return <img src={LogoImageWhite} alt="BMTECLABS" className="w-[100px] md:w-[187px]" />
  }
  return <img src={LogoImage} alt="BMTECLABS" className="w-[100px] md:w-[187px]" />
}
