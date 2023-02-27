import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchSearchId } from '../../redux/slices/ticketsSlice'

import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import TicketsFilter from '../ticketsFilter/TicketsFilter'
import TicketsList from '../ticketsList/TicketsList'
import TransfersFilter from '../transfersFilter/TransfersFilter'

import './App.scss'

import logo from '../../img/Logo.png'


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSearchId())
        /*eslint-disable-next-line*/
    }, [])

    return (
        <main className="app">
            <div className="app__container">
                <TransfersFilter />
                <TicketsFilter />
                <ErrorBoundary>
                    <TicketsList />
                </ErrorBoundary>
            </div>
            <img className="app__logo" src={logo} alt="logo" />
        </main>
    )
}

export default App
