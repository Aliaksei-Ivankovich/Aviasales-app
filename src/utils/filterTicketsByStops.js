import getNumOfStops from "./getNumOfStops";


const filterTicketsByStops = (ticket, activeStops, stops) => {

    return activeStops.length === stops.length ? true : activeStops.filter(({id}) => id === getNumOfStops(ticket)).length
}

export default filterTicketsByStops
  