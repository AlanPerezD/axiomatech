import Image from 'next/image'
import robot from '../assets/robot.png'
import gente from '../assets/gente.png'
export const Preguntas = () => {
  return (
    <div className="flex flex-col pt-24 justify-center items-center">
      {' '}
      <div className="flex justify-center items-center">
        {' '}
        <section className=" flex p-4 bg-fondo justify-center gap-12 items-center">
          <div className=" w-[30rem] h-[30rem] flex items-center">
            <Image
              width={'auto'}
              height={'auto'}
              src={gente}
              alt="AI Tech"
              className=" rounded-3xl object-cover"
            />
          </div>

          {/* CUADRADO DE TEXTO DE LA IZq  */}
          <div className="bg-fondo p-2 w-[40rem] text-stone-200 px-4  mr-10">
            <h2 className="font-extrabold text-2xl ">
              {' '}
              IA para todos: Mejorando tu vida diaria{' '}
            </h2>
            <article className="bg-fondo pt-10  text-stone-200 text-lg ">
              {' '}
              Ofrecemos consultoría gratuita para empresas de todos los tamaños,
              desde pequeñas empresas hasta grandes corporaciones. Creemos que
              todas las empresas tienen derecho a recibir el mejor asesoramiento
              posible, y nos enorgullece poder ofrecer nuestros servicios sin
              costo alguno para ti.
            </article>
            <article className="bg-fondo pt-3  text-stone-200 text-lg">
              {' '}
              Nuestro objetivo es ayudarte a tener éxito y crecer en tu negocio.
              Por eso, te ofrecemos una consulta gratuita para que puedas ver lo
              que podemos hacer por ti antes de tomar una decisión. ¡No dudes en
              ponerte en contacto con nosotros hoy mismo para comenzar!
            </article>
          </div>
          {/* CUADRADO GRANDE */}
        </section>{' '}
      </div>
    </div>
  )
}
