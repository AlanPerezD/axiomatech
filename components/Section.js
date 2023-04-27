import Image from 'next/image'
import mobile from '../assets/mobile.png'
import presentionchart from '../assets/presentionchart.png'
import monitormobbile from '../assets/monitormobbile.png'
export const Section = () => {
  return (
    <>
      {' '}
      <section className=" bg-fondo flex justify-around items-start py-36 m-4 ">
        {/* 1 */}
        <article className="flex h-24 items-center bg-fondo">
          <div className="  pr-6 w-2  min-w-max">
            {' '}
            <Image
              width={'auto'}
              height={'auto'}
              src={monitormobbile}
              alt="AI Tech"
              className=" rounded-3xl object-cover"
            />
          </div>
          <div className="0  w-40 h-24  min-w-full">
            {' '}
            Automatización de tareas: La IA puede automatizar tareas repetitivas
            y tediosas, lo que libera a los trabajadores para centrarse en
            tareas más importantes.{' '}
          </div>
        </article>
        {/* 2 */}
        <article className="flex  h-24 items-center">
          <div className="   pr-6 w-2 min-w-max">
            {' '}
            <Image
              width={'auto'}
              height={'auto'}
              src={mobile}
              alt="AI Tech"
              className=" rounded-3xl object-cover"
            />
          </div>
          <div className="   w-40 h-24 min-w-full">
            {' '}
            Ahorro de costos: La IA puede reducir los costos al mejorar la
            eficiencia, reducir los errores y evitar costosos errores humanos.{' '}
          </div>
        </article>
        {/* 3 */}
        <article className="flex  h-24 items-center  mr-16">
          <div className="  w-2 min-w-max  pr-6">
            <Image
              width={'auto'}
              height={'auto'}
              src={presentionchart}
              alt="AI Tech"
              className=" rounded-3xl object-cover"
            />
          </div>
          <div className="    w-40 h-24 min-w-full">
            Identificación de patrones: La IA puede analizar grandes cantidades
            de datos para identificar patrones y tendencias que los humanos
            podrían no detectar.
          </div>
        </article>
      </section>
    </>
  )
}
