import Image from 'next/image'
import mobile from '../assets/mobile.png'
import presentionchart from '../assets/presentionchart.png'
import logo from '../assets/Logo.png'
export const Header = () => {
  return (
    <header className="py-0 px-2 bg-barra  w-screen max-w-full  flex justify-between">
      <div className="justify-start flex py-3 pl-4">
        <Image
          width={'auto'}
          height={'auto'}
          src={logo}
          alt="AI Tech"
          className=" rounded-3xl object-cover"
        />
      </div>

      <div className=" flex">
        {' '}
        <nav className="flex items-center bg-barra py-0 px-0   ">
          {' '}
          <div className="bg-transparent w-max min-w-max  h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem]  px-3 py-3 text-white hover:bg-yellow-700/80">
            Inicio
          </div>
          <div className="bg-transparent w-max min-w-max h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem] px-3 py-3 text-white hover:bg-yellow-700/80">
            Productos
          </div>
          <div className="bg-transparent w-max min-w-max h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem] px-3 py-3 text-white hover:bg-yellow-700/80">
            Servicios
          </div>
          <div className="bg-transparent w-max min-w-max h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem] px-3 py-3 text-white hover:bg-yellow-700/80">
            Nosotros
          </div>
          <div className="bg-transparent w-max min-w-max h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem] px-3 py-3 text-white hover:bg-yellow-700/80">
            Contactanos
          </div>
          {/* Right Side*/}
        </nav>{' '}
      </div>
    </header>
  )
}
