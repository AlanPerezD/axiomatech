import { Section } from '../components/Section'
export const Content = () => {
  return (
    
   <div className='flex flex-col'>  <section className=" flex p-4 bg-red-500 justify-center gap-12">
      {/* CUADRADO DE TEXTO DE LA IZq  */}
    <div className="bg-blue-200 p-2 w-[30rem] text-stone-200 px-4 "> 
      <h2> IA para todos: Mejorando tu vida diaria </h2>
      <article className="bg-blue-200 pt-3  text-stone-200 "> En nuestra página web especializada en Inteligencia Artificial, nos enfocamos en el entrenamiento de sistemas de preguntas y respuestas para brindar soluciones eficaces a los usuarios.
       </article>
      <article className="bg-blue-200 pt-3  text-stone-200 ">  Nuestro equipo de expertos trabaja arduamente para desarrollar y perfeccionar algoritmos de aprendizaje automático para que los sistemas de IA puedan responder preguntas de manera rápida y precisa
       </article>
     </div>
    {/* CUADRADO GRANDE */}
    <div className="bg-cyan-300 w-[30rem] h-[30rem]"> CUADRADO GRANDE  (IMAGEN)? </div>

    </section>
    <Section/>
     </div> 
 
  )
}
