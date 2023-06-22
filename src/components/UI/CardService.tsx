export type CardServiceProp = {
  img: string
  title: string
  content: string
}

export const CardService: React.FC<CardServiceProp> = ({ img, title, content }: CardServiceProp) => {
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <img src={img} className="h-[100px]" alt="img" />
      </div>
      <div>
        <span className="font-bold text-xl text-cblack-500"> {title} </span>
      </div>
      <div>
        <span className="text-xl text-cblack-500">{content}</span>
      </div>
    </div>
  )
}
