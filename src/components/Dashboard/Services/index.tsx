import { CardService, CardServiceProp } from '@/components/UI/CardService'
import consultingImg from '@/assets/images/consult.png'
import softwareImg from '@/assets/images/software.png'
import webImg from '@/assets/images/web.png'
import mobileImg from '@/assets/images/mobile.png'
import responsiveImg from '@/assets/images/responsive.png'
import cloudImg from '@/assets/images/cloud.png'

const services: Array<CardServiceProp> = [
  {
    img: consultingImg,
    title: 'IT Consulting',
    content: 'Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,',
  },
  {
    img: softwareImg,
    title: 'Software Development',
    content: 'Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,',
  },
  {
    img: webImg,
    title: 'Web Development',
    content: 'Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,',
  },
  {
    img: mobileImg,
    title: 'Mobile Development',
    content: 'Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,',
  },
  {
    img: responsiveImg,
    title: 'Responsive Design',
    content: 'Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,',
  },
  {
    img: cloudImg,
    title: 'Cloud Service',
    content: 'Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,',
  },
]

export const Services = () => {
  return (
    <div className="w-full py-32 px-36">
      <div className="w-full mb-[76px]">
        <div className="flex justify-center">
          <span className="font-semibold text-[40px] leading-[46px]">Our</span>
          &nbsp;
          <span className="font-semibold text-[40px] leading-[46px] text-cpurple-500"> Services</span>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-x-28 gap-y-36">
        {services.map(({ img, title, content }: CardServiceProp, index: number) => (
          <CardService key={index} img={img} title={title} content={content} />
        ))}
      </div>
    </div>
  )
}
