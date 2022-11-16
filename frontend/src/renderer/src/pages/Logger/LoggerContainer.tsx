import { SAMPLE_DATA } from '@renderer/constants/SAMPLE_DATA'
import { useState, useEffect } from 'react'
import LoggerView from './LoggerView'
import { ipcRenderer } from 'electron'

const LoggerContainer = () => {
  const [logs, setLogs] = useState(SAMPLE_DATA)

  const handleSubmit = (data: any) => {
    data._id = Math.floor(Math.random() * 90000) + 10000
    data.created = new Date().toString()
    setLogs([...logs, data])
  }

  const handleDelete = (id: number) => {
    setLogs(logs.filter((item) => item.id !== id))
  }

  // useEffect(() => {
  //   ipcRenderer.send('logs:load')

  //   ipcRenderer.on('logs:get', (e, logs) => {
  //     setLogs(JSON.parse(logs))
  //   })
  // }, [])

  return <LoggerView data={logs} handleSubmit={handleSubmit} onDelete={handleDelete} />
}

export default LoggerContainer
