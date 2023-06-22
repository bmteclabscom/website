import { Logo } from '@/components/UI/Logo'
import { ButtonStart } from '@/components/UI'
import FBIcon from '@assets/icons/social/fb.png'
import IGIcon from '@assets/icons/social/ig.png'
import LNKIcon from '@assets/icons/social/lnk.png'
import { NavItem, items } from '@/contents/Navbar'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  message: string
}

export const Contact = () => {
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Email is mendatory'),
    message: Yup.string().required('Email is mendatory'),
    email: Yup.string()
      .required('Email is mendatory')
      .matches(/^(?=.*[@])/, 'Must contain @'),
  })

  const formOptions = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit } = useForm(formOptions)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <div>
      <div className="bg-cblack-500 flex justify-between items-center py-[57px] pl-[139px] pr-[122px]">
        <span className="font-semibold text-[40px] text-white">Got a project in mind?</span>
        <ButtonStart
          title="Get Started"
          onClick={() => {
            console.log('clicked')
          }}
        />
      </div>
      <div className="bg-cblack-600 pt-[80px] pb-[100px] pl-[139px] pr-[110px]">
        <div className="flex justify-start">
          <Logo color="white" />
        </div>
        <div className="flex justify-between mt-[23px]">
          <div className="max-w-[400px]">
            <div className="font-normal text-xl text-white">
              Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera,Lorem Ipsum disponibles,
              pero la mayoría sufrió alteraciones en alguna manera
            </div>
            <div className="flex justify-start space-x-4 h-[30px] mt-[33px]">
              <img src={FBIcon} alt="img" />
              <img src={LNKIcon} alt="img" />
              <img src={IGIcon} alt="img" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-[220px]">
            {items.map((item: NavItem, index: number) => (
              <a key={index} href={`#${item.link}`} className="font-[500] text-xl text-white">
                {item.title}
              </a>
            ))}
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="text-cgray-500 font-[300] text-xl">
              <div className="flex space-x-4 ">
                <input
                  placeholder="Name"
                  {...register('name')}
                  className="bg-transparent border-b border-cgray-500  w-[220px] pb-2"
                />
                <input
                  placeholder="Email"
                  {...register('email')}
                  className="bg-transparent border-b border-cgray-500  w-[220px] pb-2"
                />
              </div>

              <textarea
                {...register('message')}
                rows={3}
                placeholder="Message"
                className="bg-transparent w-full border-b border-cgray-500 text-cgray-500 mt-6"
              />
              <input
                type="submit"
                value="Send Message"
                className="bg-white text-cblue-500 font-semibold text-[16px] leading-[115%] px-16 py-5 rounded-[45px] mt-6"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
