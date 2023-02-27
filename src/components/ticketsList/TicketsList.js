import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Alert } from 'antd';

import { fetchTickets, showMoreTicket, selectVisibleTickets } from '../../redux/slices/ticketsSlice'

import Ticket from '../ticket/Ticket'
import Spiner from '../spiner/Spiner'
import ProgressBar from '../progressBar/ProgressBar'
import ErrorMessage from '../erorrMessage/errorMessage'


import './ticketsList.scss'


const TicketsList = () => {

    const dispatch = useDispatch()
    const visibleTickets = useSelector(selectVisibleTickets)

    const { 
        searchId, 
        tickets, 
        loading, 
        ticketsLoading, 
        stopFetch, 
        fetchStatus500, 
        error, 
        errorMessage,
    } = useSelector(state => state.tickets)

    useEffect(() => {
        if(searchId && !stopFetch) {
            dispatch(fetchTickets(searchId))
        }
    }, [searchId, stopFetch, tickets, fetchStatus500, dispatch])

    const renderItems = (arr) => {
        if (!arr.length) {
            return ( 
                <Alert description='Рейсов, подходящих под заданные фильтры, не найдено' type="info"/>
            )
        }
        return arr.map(item => {
            return (
                <Ticket key={nanoid()} {...item} />
            )
        })     
    }

    const content = useMemo(() => renderItems(visibleTickets), [visibleTickets])

    return (
        <ul className="tickets-list">
            <Spiner loading={loading}/>
            <ErrorMessage error={error} message={errorMessage}/>
            {tickets.length > 0 &&
                <ProgressBar loading={ticketsLoading} progress={tickets.length}/>
            }
            {tickets.length > 0 && content}
            {visibleTickets.length > 0 &&  visibleTickets.length !== tickets.length &&
                <button onClick={() => dispatch(showMoreTicket())} 
                        className="tickets-list__btn">
                    Показать еще 5 билетов! 
                </button>
            }
        </ul>
    )
}

export default TicketsList
