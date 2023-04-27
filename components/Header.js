export const Header = () => {
  return (
    <header className="py-0 px-0 bg-stone-900  w-screen max-w-full  flex justify-between">
      
        <div className="justify-start flex py-3">
          <div className="text-white"> Axioma Tech</div>
        </div>

      <div className=" flex">
        {' '}
        <nav className="flex items-center bg-stone-900 py-0 px-0   ">
        
            {' '}
            <div className="bg-transparent w-max min-w-max  h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem]  px-3 py-3 text-amber-400 hover:bg-yellow-700/80">
              Inicio
            </div>
            <div className="bg-transparent w-max min-w-max h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem] px-3 py-3 text-amber-400 hover:bg-yellow-700/80">
             Productos
            </div>
            <div className="bg-transparent w-max min-w-max h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem] px-3 py-3 text-amber-400 hover:bg-yellow-700/80">
             Servicios
            </div>
            <div className="bg-transparent w-max min-w-max h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem] px-3 py-3 text-amber-400 hover:bg-yellow-700/80">
             Nosotros
            </div>
            <div className="bg-transparent w-max min-w-max h-min font-extrabold  text-[0.55rem] smaller:text-[0.88rem] sm:text-[1rem] px-3 py-3 text-amber-400 hover:bg-yellow-700/80">
             Contactanos
            </div>
          

          {/* Right Side*/}
        </nav>{' '}

      </div>
    </header>
  )
}
