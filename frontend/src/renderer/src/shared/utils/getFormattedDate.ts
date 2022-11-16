import { addHours, format as fnsFormat } from 'date-fns'

export const getConvertedDate = (date: Date) => {
  return addHours(new Date(date), 8 || 0)
}

export const getFormattedDate = (date: Date, format?: string) => {
  return fnsFormat(getConvertedDate(date), format || 'eee, LLL dd, yyyy hh:mm a')
}
