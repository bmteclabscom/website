import React from 'react'
import './style.css'
export interface CardProjectProps {
  url: string
}
export const CardProject: React.FC<CardProjectProps> = ({ url }: CardProjectProps) => {
  return (
    <div className="w-[95%] hover:cursor-pointer">
      <div className="w-full flex items-center justify-center bg-gray-light rounded-[16px] drop-shadow-4xl ">
        <img src={url} alt="img" className="h-[350px]" />
        <div className="overlay-img"></div>
      </div>
    </div>
  )
}
