const getTotalDuration = (ticket) => {
    return ticket.segments
        .map((segment) => segment.duration)
        .reduce((prevValue, currValue) => prevValue + currValue, 0);
}

export default getTotalDuration;