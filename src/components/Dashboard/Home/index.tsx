import { ButtonStart } from '@/components/UI'
import HeroImg from '@assets/images/hero.png'
export const Home = () => {
  return (
    <div className="relative pt-[180px] pl-[100px] md:h-[850px] xl:h-[950px] bg-gradient-to-t from-[#F7F7F7] to-[#F7F2F8]">
      <div className="max-w-[720px]">
        <div className="font-semibold md:text-[60px] md:leading-[60px] xl:text-[80px] xl:leading-[90px] text-cblack-500 mb-6">
          Powerful Creative Digital Agency
        </div>
        <div className="max-w-[482px] font-semibold text-[40px] leading-[46px] mb-12">
          <span>Move to </span>
          <span className="text-cpurple-500">digital </span>
          <span>grow your business</span>
        </div>
        <ButtonStart
          title={'Get Started'}
          onClick={() => {
            console.log('clicked')
          }}
        />
      </div>
      <div className="md:absolute md:w-[500px] md:h-[400px] xl:w-[775px] xl:h-[575px] md:right-10 md:bottom-0">
        <img src={HeroImg} alt="img" />
      </div>
    </div>
  )
}
