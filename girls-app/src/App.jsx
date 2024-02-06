import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'



function App() {
  
  // #100F15
  // #D33B96
  // #2C4290


  // #FF4CB7
  // #4E75FF
  return (
    <>
    <div className='bg-[#100F15] min-h-screen '>
   
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/signUp' element={<RegistrationPage />} /> */}
           {/* <Route element={<PointProviderLayout />}>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/dashboard/:language_Topics' element={<LanguageTopicsPage />} />
            <Route path='/dashboard/:language_Topics/:topic/levels' element={<LevelsPage />} />
            <Route path='/dashboard/:language_Topics/:topic/levels/:levelNum/challenges' element={<ChallengePage />} />
            <Route path='/dashboard/:language_Topics/:topic/levels/:levelNum/challenges/:challengeNum' element={<HTMLPage />} /> */}
          {/* </Route> */}
        </Routes>
    </BrowserRouter>
 
    </div>
    </>
  )
}

export default App