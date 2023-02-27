import { getHours, getMinutes, parseISO, add } from 'date-fns'


const getFlyTime = (str, duration) => {
    const startDate = parseISO(str)
    const endDate = add(startDate, {minutes: duration})

    function getTime (date) {
        const hours = getHours(date) < 10 ? `0${getHours(date)}` : getHours(date)
        const min = getMinutes(date) < 10 ? `0${getMinutes(date)}` : getMinutes(date)
        return `${hours}:${min}`
    }
  
    return `${getTime(startDate)} - ${getTime(endDate)}`
}

export default getFlyTime