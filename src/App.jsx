import React from 'react'
import './App.css'
import Homepage from './Pages/homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectPage from './Pages/projectpage'
import AchievmentPage from './Pages/certificationpage'
import ExperiencePage from './Pages/experiencePage'
import EducationPage from './Pages/educationPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/education' element={<EducationPage />}></Route>
          <Route path='/project' element={<ProjectPage />}></Route>
          <Route path='/certifications' element={<AchievmentPage />}></Route>
          <Route path='/experience' element={<ExperiencePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
