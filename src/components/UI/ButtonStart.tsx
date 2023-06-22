export type ButtonStartProp = {
  title: string
  className?: string
  onClick: () => void
}

export const ButtonStart: React.FC<ButtonStartProp> = ({ title, className = '', onClick }: ButtonStartProp) => {
  return (
    <button
      onClick={onClick}
      className={`${className} font-semibold text-2xl leading-[115%] px-20 py-5 rounded-[45px] text-cwhite-500  bg-gradient-to-r from-[#9C11F3] from-4% to-[#5741D9] to-100%`}
    >
      {title}
    </button>
  )
}
