import LoggerView from './LoggerView'
import { useEffect, useState } from 'react'

declare const window: any

const LoggerContainer = () => {
  const [logs, setLogs] = useState<any[]>([])

  const handleSubmit = (data: object) => {
    window.electron.ipcRenderer.send('logs:add', data)
  }

  const handleDelete = (id: string) => {
    setLogs(logs.filter((item) => item._id !== id))
    window.electron.ipcRenderer.send('logs:delete', id)
  }

  useEffect(() => {
    window.electron.ipcRenderer.send('logs:load')
    window.electron.ipcRenderer.on('logs:get', (_, data) => {
      setLogs(JSON.parse(data))
    })
  }, [])

  return <LoggerView data={logs} handleSubmit={handleSubmit} onDelete={handleDelete} />
}

export default LoggerContainer
