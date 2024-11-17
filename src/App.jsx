import './App.scss'
import { FAQSSection } from './components/FAQSSection/FAQSSection'
import { Footer } from './components/Footer/Footer'
import { HeaderSection } from './components/headerSection/HeaderSection'
import NavBar from './components/navbar/NavBar'
import { OurProcess } from './components/OurProcess/OurProcess'
import { OurResultSection } from './components/OurResultSection/OurResultSection'
import OurTeam from './components/ourTeam/OurTeam'
import { PIPSection } from './components/PIPSection/PIPSection'
import { WWASection } from './components/who_we_are_Section/WWASection'
import { WhyUsSection } from './components/whyUsSection/WhyUsSection'
function App() {

  return (
    <>
    <div className='main-div'>
      <NavBar></NavBar>
      <HeaderSection></HeaderSection> 
      <WWASection></WWASection>
      <OurProcess></OurProcess>
      <PIPSection></PIPSection>
      <OurResultSection></OurResultSection>
      <WhyUsSection></WhyUsSection>
      <OurTeam></OurTeam>
      <FAQSSection></FAQSSection>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
