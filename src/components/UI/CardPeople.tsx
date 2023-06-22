import React from 'react'

type SocialLink = {
  icon: string
  url: string
}

export type CardPeopleProps = {
  name: string
  img: string
  role: string
  description: string
  social?: Array<SocialLink>
  icon?: {
    img: string
    className: string
  }
}
export const CardPeople: React.FC<CardPeopleProps> = ({
  name,
  img,
  role,
  description,
  social,
  icon,
}: CardPeopleProps) => {
  console.log('icon', icon)
  return (
    <div className="max-w-[300px]">
      <div className="relative  w-[200px] m-auto">
        <img src={img} className="rounded-full" />
        {icon && <img src={icon.img} className={`${icon.className} absolute w-[50px]`} />}
      </div>
      <div className="flex flex-col space-y-1 text-center mt-1">
        <span className="font-bold text-xl text-cblack-500">{name}</span>
        <span className="font-bold text-xl text-cpurple-500">{role}</span>
        <span className="font-normal text-xl text-cblack-500">{description}</span>
      </div>
      {social && (
        <div className="flex w-full justify-center space-x-4 mt-2">
          {social.map((item: SocialLink, index: number) => (
            <a key={index} href={item.url} target="_blank">
              <img src={item.icon} className="w-[30px]" />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
