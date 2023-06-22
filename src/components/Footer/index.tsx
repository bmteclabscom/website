import FBIcon from '@assets/icons/social/fb.png'
import IGIcon from '@assets/icons/social/ig.png'
import LNKIcon from '@assets/icons/social/lnk.png'

export const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center px-[100px] bg-cblack-500 h-[70px] text-white font-normal text-[16px]">
      <div>©2023@Bmtechlabs All rights reserved Developed by Agency </div>
      <div className="flex justify-center items-center space-x-4">
        <img src={FBIcon} className="h-[30px]" alt="img" />
        <img src={LNKIcon} className="h-[30px]" alt="img" />
        <img src={IGIcon} className="h-[30px]" alt="img" />
      </div>
    </footer>
  )
}
