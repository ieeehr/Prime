import Future from './components/Future'
import About from './sections/Aboutprime'
import Aboutieee from './sections/AboutIeee'
import Workshops from './sections/Workshops'
import Talks1 from './sections/Talks1'
import Registration from './sections/Registration'
import Contact from './sections/Contact'
import Hero2 from './components/Hero2'
import CountdownTimer from './components/CountdownTimer'
import LogoSlider from './components/LogoSlider'
import Navbar from './components/Navbar'
//import EventsCarousel from './components/Talkevt'
import EventsCarousel from './sections/Comp'
import Footer from './components/footer'
export default function Page() {
  return (
    <>
      <Navbar></Navbar>
      <Hero2></Hero2>
      <Future></Future>
      <About></About>
      <Aboutieee></Aboutieee>
      <Workshops></Workshops>
      <EventsCarousel></EventsCarousel>
      <Talks1></Talks1>
      
      <Registration></Registration>
      <Contact></Contact>
      <LogoSlider></LogoSlider>
      <CountdownTimer></CountdownTimer>
      <Footer></Footer>
  
      
    </>
  )
}

