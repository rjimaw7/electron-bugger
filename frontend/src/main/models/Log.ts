import { Schema, model } from 'mongoose'

interface ILog {
  priority: string
  text: string
  user: string
  trim?: boolean
  required?: string[]
  default?: string
  enum?: string[]
  created: any
}

const LogSchema = new Schema<ILog>({
  text: {
    type: String,
    trim: true,
    required: [true, 'Log text is required']
  },
  priority: {
    type: String,
    default: 'low',
    enum: ['low', 'moderate', 'high']
  },
  user: {
    type: String,
    trim: true,
    required: [true, 'User is required']
  },
  created: {
    type: Date,
    default: Date.now()
  }
})

export const Log = model<ILog>('Log', LogSchema)
