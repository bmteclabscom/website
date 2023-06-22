import React from 'react'
import TeaImg1 from '@assets/images/tea1.png'
import TeaImg2 from '@assets/images/tea2.png'
import Awesome from '@assets/images/awesome.png'
import { Reviews } from '@/contents/ClientReview/indext'
import { Carousel } from 'react-responsive-carousel'
import { CardClientReview } from '@/components/UI/CardClientReview'
export const ClientReview = () => {
  return (
    <div>
      <div className="flex items-center h-[488px] bg-gradient-to-t from-[#9b12f3a6] to-[#5b3edba6]">
        <div className="flex justify-center items-start space-x-5">
          <img src={TeaImg1} className="w-[240px]" />
          <span className="font-semibold text-[85px] leading-[115%] text-center text-white">
            Ready to move into the digital world?
          </span>
          <img src={TeaImg2} className="w-[240px]" />
        </div>
      </div>
      <div className="flex justify-center space-x-[113px] px-[200px] py-[180px]">
        <div className="max-w-[240px]">
          <img src={Awesome} />
        </div>
        <div className="w-[760px] reviews rounded-[15px] shadow-1xl">
          <Carousel
            showStatus={false}
            infiniteLoop={true}
            showArrows={false}
            autoPlay={false}
            showThumbs={false}
            showIndicators={true}
          >
            {Reviews.map((review, index) => (
              <CardClientReview
                key={index}
                content={review.content}
                name={review.name}
                companyName={review.companyName}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
