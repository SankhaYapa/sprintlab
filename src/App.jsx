import './App.scss'
import { HeaderSection } from './components/headerSection/HeaderSection'
import NavBar from './components/navbar/NavBar'
import { OurProcess } from './components/OurProcess/OurProcess'
import { WWASection } from './components/who_we_are_Section/WWASection'
function App() {

  return (
    <>
    <div className='main-div'>
      <NavBar></NavBar>
      <HeaderSection></HeaderSection>
      <WWASection></WWASection>
      <OurProcess></OurProcess>
    </div>
    </>
  )
}

export default App
