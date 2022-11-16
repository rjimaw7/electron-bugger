import { ILogs } from '@renderer/shared/interfaces/ILogs'
import { getFormattedDate } from '@renderer/shared/utils/getFormattedDate'
import { Button, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'

interface Props {
  onDelete: (id: string) => void
}

export const LOGGERLIST_COLUMN = ({ onDelete }: Props): ColumnsType<ILogs> => {
  return [
    {
      key: 'priority',
      title: 'Priority',
      render: (_, record) => {
        return record.priority
      }
    },
    {
      key: 'text',
      title: 'Log Text',
      render: (_, record) => {
        return record.text
      }
    },
    {
      key: 'user',
      title: 'User',
      render: (_, record) => {
        return record.user
      }
    },
    {
      key: 'created',
      title: 'Created',
      render: (_, record) => {
        return getFormattedDate(new Date(record.created), 'iii, MMM d, yyyy hh:mm aa')
      }
    },
    {
      key: 'actions',
      title: 'Actions',
      render: (_, { _id }: ILogs) => {
        return (
          <Space>
            <Button type="primary" onClick={() => onDelete(_id)}>
              Delete
            </Button>
          </Space>
        )
      }
    }
  ]
}
