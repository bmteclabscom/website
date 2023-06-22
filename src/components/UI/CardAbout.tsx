import React from 'react'

export type CardAboutProps = {
  title: string
  img: string
}
export const CardAbout: React.FC<CardAboutProps> = ({ title, img }: CardAboutProps) => {
  return (
    <div className="flex items-center space-x-4 px-8 py-7 bg-gradient-to-l from-[#F7F7F7] to-[#F7F2F8] shadow-1xl rounded-[15px] max-w-[304px]">
      <div className="w-[50px]">
        <img src={img} alt="Card Image" />
      </div>
      <div className="font-semibold text-xl text-cblack-400 w-[180px]">
        <span>{title}</span>
      </div>
    </div>
  )
}
