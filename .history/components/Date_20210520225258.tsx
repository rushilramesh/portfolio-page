import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return <time className="text-gray-600 text-xs" dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}