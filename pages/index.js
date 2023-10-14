import { Userpilot } from 'userpilot'
// Initialize Userpilot

import { Header } from '../components/Header'
import { Content } from '../components/Content'
import { Doscuadrados } from '../components/Doscuadrados'
import { Testimonios } from '../components/Testimonios'
import { Preguntas } from '../components/Preguntas'
export default function Home() {
  Userpilot.initialize('NX-56a9fbf7');
  return (
    <>
      <div className="w-screen max-w-full  bg-fondo flex flex-col ">
        {/*  <Navbar/> */}
        <Header />
        <Content />
        <Doscuadrados />
        {/* <Testimonios /> */}
        <Preguntas />
      </div>
    </>
  )
}
