import { nanoid } from '@reduxjs/toolkit'

import getStopsLable from '../../utils/getStopsLable'
import getFlyDuration from '../../utils/getFlyDuration'
import getFlyTime from '../../utils/getFlyTime'


import './ticket.scss'


const Ticket = (props) => {
    const {price, carrier, segments} = props  

    const renderSegments = (arr) => {
        return arr.map(item => {
            const {origin, destination, date, duration, stops} = item

            return (
                <div key={nanoid()} className="ticket__info-wrapper">
                    <div className="ticket__date">
                        <span className="ticket__text">{origin} - {destination}</span>
                        <span className="ticket__info">{getFlyTime(date, duration)}</span>
                    </div>
                    <div className="ticket__duration">
                        <span className="ticket__text">В пути</span>
                        <span className="ticket__info">{getFlyDuration(duration)}</span>
                    </div>
                    <div className="ticket__stops">
                        <span className="ticket__text">{getStopsLable(stops)}</span>
                        <span className="ticket__info">{stops.join(', ')}</span>
                    </div>
                </div>
            )
        })
    }

    const ticketSegments = renderSegments(segments);

    return (
        <li className="ticket">
            <div className="ticket__header">
                <span className="ticket__price">{`${price.toLocaleString('ru')} P`}</span>
                <img
                    className="ticket__img"
                    src={`https://pics.avs.io/99/36/${carrier}.png`}
                    alt="carrier logo"
                /> 
            </div>
            <div className="ticket__content">
               {ticketSegments}
            </div>
        </li>
    )
}

export default Ticket
