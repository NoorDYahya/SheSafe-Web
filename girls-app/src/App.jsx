import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'



function App() {
  
  return (
    <>
    <div className='bg-[#100F15] min-h-screen '>
   
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
    

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