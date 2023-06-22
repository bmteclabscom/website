import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import Prev from '@/assets/icons/prev.png'
import Next from '@/assets/icons/next.png'
import { Projects as ProjectImgs } from '@/contents'
import { CardProject } from '@/components/UI'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import DisplayBottomImg from '@assets/images/display_bottom.png'

export const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(4)
  const onPrev = () => {
    setCurrentSlide((v: number) => {
      if (v <= 0) {
        return ProjectImgs.length - 1
      } else {
        return v - 1
      }
    })
  }
  const onNext = () => {
    setCurrentSlide((v: number) => {
      if (v >= ProjectImgs.length - 1) {
        return 0
      } else {
        return v + 1
      }
    })
  }

  const updateCurrentSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index)
    }
  }

  return (
    <div>
      <div className="w-full py-32">
        <div className="w-full mb-[76px]">
          <div className="flex justify-center">
            <span className="font-semibold text-[40px] leading-[46px]">Our</span>
            &nbsp;
            <span className="font-semibold text-[40px] leading-[46px] text-cpurple-500"> Projects</span>
          </div>
        </div>
        <div className="w-full relative projects">
          <i className="absolute bg-transparent  left-[270px] top-[50%] -translate-y-[50%] z-50 hover:cursor-pointer">
            <img src={Prev} alt="Prev" onClick={onPrev} width="50" />
          </i>
          <Carousel
            centerMode={true}
            swipeScrollTolerance={10}
            centerSlidePercentage={50}
            showStatus={false}
            infiniteLoop={true}
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
            showIndicators={false}
            showArrows={false}
            autoPlay={true}
            showThumbs={false}
          >
            {ProjectImgs.map((url, index) => (
              <CardProject key={index} url={url} />
            ))}
          </Carousel>
          <i className="absolute bg-transparent  right-[270px] top-[50%] -translate-y-[50%] z-50 hover:cursor-pointer">
            <img src={Next} alt="Next" onClick={onNext} width="50" />
          </i>
          <div className="absolute"></div>
        </div>
        <div className="w-full flex justify-center ">
          <img src={DisplayBottomImg} className="w-[450px]" />
        </div>
      </div>
    </div>
  )
}
