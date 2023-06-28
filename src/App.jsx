// import { useState } from 'react'
import './App.css'
import './assets/tablet-responsive.css'
import './assets/desktop-responsive.css'
import { ContactMe } from './components/contactme'
import { Header } from './components/header'
import { Intro } from './components/intro'
import { SkillList } from './components/skill'
import { Footer } from './components/footer'
// import { ContactMe } from './components/contactme'
function App() {

  return (
    <>
      <Header />
      <Intro />
      <SkillList />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
