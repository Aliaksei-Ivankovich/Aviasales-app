const getNumOfStops = (ticket) => {
    let numOfStops = 0;
    ticket.segments.forEach(({stops}) => {
        if (stops.length > numOfStops) numOfStops = stops.length
    })
    return numOfStops;
}
  
export default getNumOfStops
