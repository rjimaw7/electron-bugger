import { useMemo, useState } from 'react'
import { Card, Space, Table, Form, Input, Select, Button } from 'antd'
import { LOGGERLIST_COLUMN } from './LoggerColumn'
import { ILogs } from '@renderer/shared/interfaces/ILogs'
import { LoggerViewContainer, LoggerViewHeader } from './Logger.list.styled'

interface Props {
  data: ILogs[]
  handleSubmit: (data: object) => void
  onDelete: (id: string) => void
}

const LoggerView = ({ data, handleSubmit, onDelete }: Props) => {
  const [text, setText] = useState('')
  const [user, setUser] = useState('')
  const [priority, setPriority] = useState('')

  const tableData = useMemo(() => {
    return data.map((result) => {
      return {
        ...result,
        key: result._id
      }
    })
  }, [data])

  return (
    <>
      <LoggerViewContainer>
        <Space direction="vertical" style={{ width: 'inherit' }}>
          <Card>
            <LoggerViewHeader>
              <Form layout="vertical">
                <Form.Item label="Log">
                  <Input name="text" value={text} onChange={(e) => setText(e.target.value)} />
                </Form.Item>
                <Form.Item label="User">
                  <Input name="user" value={user} onChange={(e) => setUser(e.target.value)} />
                </Form.Item>
                <Form.Item label="Priority">
                  <Select
                    options={[
                      {
                        value: 'low',
                        label: 'Low'
                      },
                      {
                        value: 'moderate',
                        label: 'Moderate'
                      },
                      {
                        value: 'high',
                        label: 'High'
                      }
                    ]}
                    value={priority}
                    onChange={(value: string) => setPriority(value)}
                  />
                </Form.Item>
              </Form>
            </LoggerViewHeader>
            <Space size="middle">
              <Button
                type="primary"
                onClick={() => {
                  handleSubmit({ text, user, priority })
                  setText('')
                  setUser('')
                  setPriority('')
                }}
              >
                Save
              </Button>
            </Space>
            <Table columns={LOGGERLIST_COLUMN({ onDelete })} rowKey="_id" dataSource={tableData} />
          </Card>
        </Space>
      </LoggerViewContainer>
    </>
  )
}

export default LoggerView
