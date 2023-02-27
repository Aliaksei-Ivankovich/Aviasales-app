const getStopsLable = (arr) => {
    switch (arr.length) {
        case 0: 
            return `БЕЗ ПЕРЕСАДОК`
        case 1:
            return `${arr.length} ПЕРСАДКА`
        case 2:
        case 3:
        case 4:
            return `${arr.length} ПЕРСАДКИ`
        default:
            return `${arr.length} ПЕРСАДКОК`
    }
  }
  
export default getStopsLable