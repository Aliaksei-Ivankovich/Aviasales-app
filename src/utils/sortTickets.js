import getTotalDuration from "./getTotalDuration"

const sortTickets = ( activeFilter) => {

    switch (activeFilter) {
        case 'CHEEAP': 
            return (prev, next) => (prev.price > next.price ? 1 : -1)
        case 'FAST':
            return (prev, next) => (getTotalDuration(prev) > getTotalDuration(next) ? 1 : -1)
        case 'OPTIMUM':
            return (prev, next) => (getTotalDuration(prev) + prev.price > getTotalDuration(next) + next.price ? 1 : -1)
        default: 
            return 
    }
}

export default sortTickets