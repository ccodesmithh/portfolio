import React from 'react'
import './App.css'
import Bg from './components/background'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: 'auto' }}>
        <Bg
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={35}
          noise={0.5}
          blindCount={41}
          blindMinWidth={70}
          mouseDampening={0.2}
          mirrorGradient
          spotlightRadius={0.6}
          spotlightSoftness={0.7}
          spotlightOpacity={1}
          distortAmount={0}
          shineDirection="left"
        />
      </div>

      <div className="app-content">
        <Header name="Codesmith" />

        <main className="main">
          <Hero />

          <About>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda fugiat error sequi necessitatibus expedita velit voluptatibus, aut reiciendis facilis consequuntur doloremque cumque consectetur nobis commodi natus deserunt provident blanditiis.
          </About>

          <Projects />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
