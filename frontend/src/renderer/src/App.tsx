import { useEffect, useState } from 'react'
import { SAMPLE_DATA } from './constants/SAMPLE_DATA'
import { LoggerPage } from './pages/Logger'
// import { ipcRenderer } from 'electron'

const App = () => {
  // useEffect(() => {
  //   ipcRenderer.send('logs:load')
  // }, [])

  return (
    <>
      <LoggerPage />
    </>
  )
}

export default App
