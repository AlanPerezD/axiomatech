

import { Header } from '../components/Header'
import { Content } from '../components/Content'
import { Doscuadrados } from '../components/Doscuadrados'
import { Testimonios } from '../components/Testimonios'
import { Preguntas } from '../components/Preguntas'
export default function Home() {
  return (
    <>
      <div className="w-screen max-w-full  bg-green-900 flex flex-col ">
       {/*  <Navbar/> */}
       <Header/>
        <Content/>
       <Doscuadrados/>
      <Testimonios/>
      <Preguntas/>
      </div>
    </>
  )
}
