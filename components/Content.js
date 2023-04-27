import { Section } from '../components/Section'
import Image from 'next/image'
import robot from '../assets/robot.png'
export const Content = () => {
  return (
    <div className="flex flex-col pt-24">
      {' '}
      <section className=" flex p-4 bg-fondo justify-center gap-12 items-center">
        {/* CUADRADO DE TEXTO DE LA IZq  */}
        <div className="bg-fondo p-2 w-[40rem] text-stone-200 px-4  mr-10">
          <h2 className="font-extrabold text-2xl ">
            {' '}
            IA para todos: Mejorando tu vida diaria{' '}
          </h2>
          <article className="bg-fondo pt-10  text-stone-200 text-lg ">
            {' '}
            En nuestra página web especializada en Inteligencia Artificial, nos
            enfocamos en el entrenamiento de sistemas de preguntas y respuestas
            para brindar soluciones eficaces a los usuarios.
          </article>
          <article className="bg-fondo pt-3  text-stone-200 text-lg">
            {' '}
            Nuestro equipo de expertos trabaja arduamente para desarrollar y
            perfeccionar algoritmos de aprendizaje automático para que los
            sistemas de IA puedan responder preguntas de manera rápida y precisa
          </article>
        </div>
        {/* CUADRADO GRANDE */}
        <div className=" w-[30rem] h-[30rem]">
          <Image
            width={'auto'}
            height={'auto'}
            src={robot}
            alt="AI Tech"
            className=" rounded-3xl object-cover"
          />
        </div>
      </section>
      <Section />
    </div>
  )
}
