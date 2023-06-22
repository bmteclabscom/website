import HelixSmall from '@assets/images/helix-small.png'
import Helix from '@assets/images/helix.png'
import { CardPeople, CardPeopleProps } from '@/components/UI/CardPeople'
import { Persons } from '@/contents/Team'
console.log(Persons)
export const Team = () => {
  return (
    <div className="w-full relative py-32 px-36">
      <div className="w-full mb-[76px]">
        <div className="flex justify-center">
          <span className="font-semibold text-[40px] leading-[46px]">Our</span>
          &nbsp;
          <span className="font-semibold text-[40px] leading-[46px] text-cpurple-500"> Team</span>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-x-28 gap-y-36">
        {Persons.map((person: CardPeopleProps, index: number) => (
          <CardPeople
            key={index}
            img={person.img}
            name={person.name}
            role={person.role}
            description={person.description}
            social={person.social}
            icon={person.icon}
          />
        ))}
      </div>
      <div>
        <img src={HelixSmall} className="absolute right-0 top-32 w-[170px]" />
        <img src={Helix} className="absolute left-0-0 bottom-0 w-[170px]" />
      </div>
    </div>
  )
}
