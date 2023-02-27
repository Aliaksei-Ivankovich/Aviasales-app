import { minutesToHours } from 'date-fns'

const getFlyDuration = (value) => {
    const hours = minutesToHours(value)
    const min = value - (hours * 60)

    return `${hours}ч ${min}м`
}

export default getFlyDuration