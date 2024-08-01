import Navbar from './components/Navbar'
import Header from './components/sections/Header'
import Brands from './components/sections/Brands'
import About from './components/sections/About'
import Questions from './components/sections/Questions'
import Progress from './components/sections/Progress'
import Services from './components/sections/Services'
import CallToAction from './components/sections/CallToAction'
import Portfolio from './components/sections/Portfolio'
import Team from './components/sections/Team'
import Priecing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import JoinOurNewsletter from './components/sections/JoinOurNewsletter'
import Footer from './components/Footer'
import ButtonTop from './components/ButtonTop'
import './styles/styles.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Brands />
      <About />
      <Questions />
      <Progress />
      <Services />
      <CallToAction />
      <Portfolio />
      <Team />
      <Priecing />
      <FAQ />
      <Contact />
      <JoinOurNewsletter />
      <Footer />
      <ButtonTop />
    </>
  )
}
