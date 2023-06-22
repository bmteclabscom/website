import React from 'react'

export type CardClientReviewProp = {
  content: string
  name: string
  companyName?: string
}
export const CardClientReview: React.FC<CardClientReviewProp> = ({
  content,
  name,
  companyName,
}: CardClientReviewProp) => {
  return (
    <div className="w-[760px] py-[45px] px-[65px] text-cblack-500 text-start bg-gradient-to-t from-[#F6F6F6] to-[#F7F2F8] ">
      <div className="text-[28px] font-normal leading-[37px]">{content}</div>
      <div className="text-xl font-bold mt-[19px]">{name}</div>
      <div className="text-xl font-normal">{companyName}</div>
    </div>
  )
}
