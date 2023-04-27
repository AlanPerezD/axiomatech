import Image from 'next/image'

import dropbox from '../assets/dropbox.png'
import emojihappy from '../assets/emojihappy.png'
import task from '../assets/task.png'
import magicpen from '../assets/magicpen.png'
import timer from '../assets/timer.png'
import timer1 from '../assets/timer1.png'
import user from '../assets/user.png'
import people from '../assets/people.png'
import calculator from '../assets/calculator.png'

export const Doscuadrados = () => {
  return (
    <section className="pt-10 bg-fondo flex justify-center  gap-24 ">
      {/* 1 */}
      <article className="flex w-[40rem] h-auto bg-granrectangulo1 justify-center py-7">
        <div className="flex flex-col">
          <div className=" min-w-full flex justify-center ">
            {/* Titulo */}
            <div className="flex flex-col  items-center pb-10">
              <div className="font-bold  text-3xl py-2">Diseño UX/UI</div>
              <div className="font-bold text-5xl   py-2">$ 200</div>
              <div className="font-bold text-3xl  py-2"> Pago Unico</div>
            </div>
          </div>
          {/* Features */}
          <div className=" flex  justify-center items-center ">
            <div className="flex flex-col items-start px-0 mx-36">
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={magicpen}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold text-2xl ">
                  Diseño web personalizado
                </div>
              </span>
              {/*  */}
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={calculator}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold    text-2xl">
                  Interfaz amigable para el usuario
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={user}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Diseñadores dedicados
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={people}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-12 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold  text-2xl ">
                  Revisiones ilimitadas
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={task}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Pedidos ilimitados
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={emojihappy}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Archivos nativos
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={dropbox}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Colaboración a tiempo real
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={timer}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  1-2 días por pedido
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={timer1}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Realizamos el diseño hasta que estés satisfecho!
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={magicpen}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold text-2xl">
                  Diseño adaptables para móviles
                </div>
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* 2 */}
      <article className="flex w-[40rem] h-auto bg-granrectangulo2 justify-center py-7">
        <div className="flex flex-col">
          <div className=" min-w-full flex justify-center ">
            {/* Titulo */}
            <div className="flex flex-col justify-center items-center pb-10">
              <div className="font-bold  text-3xl py-2">Diseño UX/UI</div>
              <div className="font-bold text-5xl   py-2">$ 1500</div>
              <div className="font-bold text-sm   pb-2"> max 6 pagos.</div>
              <div className="font-bold text-3xl  py-2"> </div>
            </div>
          </div>
          {/* Features */}
          <div className=" flex  justify-center items-center ">
            <div className="flex flex-col items-start px-0 mx-36">
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={magicpen}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold text-2xl ">
                  Diseño UI/UX personalizado
                </div>
              </span>
              {/*  */}
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={calculator}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold    text-2xl">
                  Diseño adaptable para móviles
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={user}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Interfaz amigable para el usuario
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={people}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-12 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold  text-2xl ">
                  Optimización de motores de búsqueda (SEO)
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={task}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Integración con mercado pago
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={emojihappy}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Gestión de inventario
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={dropbox}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Creación de cuentas de clientes
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={timer}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Integración con redes sociales
                </div>
              </span>
              <span className="flex items-center">
                {' '}
                <Image
                  width={'auto'}
                  height={'auto'}
                  src={timer1}
                  alt="AI Tech"
                  className="  w-14  pr-3 h-10 object-scale-down"
                />{' '}
                <div className="py-3 font-semibold   text-2xl">
                  Análisis e informes
                </div>
              </span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

/* Diseño web personalizado
Diseño adaptables para móviles
Interfaz amigable para el usuario
Diseñadores dedicados
Revisiones ilimitadas
Pedidos ilimitados
Archivos nativos
Colaboración a tiempo real
1-2 días por pedido
Realizamos el diseño hasta que estés satisfecho! */
