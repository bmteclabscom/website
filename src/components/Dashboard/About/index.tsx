import Hero from '@/assets/images/about_hero.png'
import Target from '@/assets/images/target.png'
import ExperienceIcon from '@assets/icons/experience.png'
import CustomerIcon from '@assets/icons/customer.png'
import SafeIcon from '@assets/icons/safe.png'
import timeIcon from '@assets/icons/time.png'
import { CardAbout, CardAboutProps } from '@/components/UI/CardAbout'

const items: Array<CardAboutProps> = [
  {
    title: 'We have an experienced team',
    img: ExperienceIcon,
  },
  {
    title: 'Customer Satisfaction is our priority',
    img: CustomerIcon,
  },
  {
    title: 'We are very Safe, Secure & maintain privacy',
    img: SafeIcon,
  },
  {
    title: 'We are very time efficient & provide quality',
    img: timeIcon,
  },
]

export const About = () => {
  return (
    <div className="bg-cwhite-400 py-[122px] pb-[106px] px-[124px]">
      <div className="flex justify-between p-16">
        <div>
          <img src={Hero} className="w-[490px]" alt="img" />
        </div>
        <div className="">
          <div className="relative">
            <div className="font-semibold text-[52px] leading-[58px] text-cblack-500 max-w-[550px] mb-[10px]">
              <span className="">One </span>
              <span className="text-cpurple-500">Stop Solution</span>
              <span> for all your digital needs</span>
            </div>
            <div className="w-[100px] absolute top-0 right-0 ">
              <img src={Target} alt="img" />
            </div>
          </div>
          <div className="max-w-[608px]">
            <span className="text-xl font-normal text-cblack-500">
              Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,Lorem Ipsum disponibles,
              pero la mayoría sufrió alteraciones en alguna manera,Lorem Ipsum disponibles, pero la mayoría sufrió
              alteraciones en alguna manera,Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna
              manera,Lorem Ipsum disponibles, pero la mayoLorem Ipsum disponibles, pero la mayoría sufrió alteraciones
              en alguna manera,Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,Lorem Ipsum
              disponibles, pero la mayoría
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        {items.map((item: CardAboutProps, index) => (
          <CardAbout key={index} title={item.title} img={item.img} />
        ))}
      </div>
    </div>
  )
}
