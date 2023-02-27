import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';

import filterTicketsByStops from '../../utils/filterTicketsByStops'
import sortTickets from '../../utils/sortTickets';
import { useAviasalesServices } from '../../services/useAviasalesServices'


const initialState = {
    tickets: [],
    numOfShowedTickets: 5,
    loading: false,
    ticketsLoading: false,
    error: false,
    errorMessage: '',
    searchId: '',
    stopFetch: false,
    fetchStatus500: 0,
}

export const fetchSearchId = createAsyncThunk(
    'tickets/fetchSearchId',
    async () => {
        const { getSearchId } = useAviasalesServices()
        return await getSearchId()
    }
)

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async (id, {rejectWithValue}) => {
        const { getTickets } = useAviasalesServices()
        try {
            return await getTickets(id)
        } catch(e) {
            return rejectWithValue(e.message)
        }
    }
)

const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        showMoreTicket: (state) => {
            state.numOfShowedTickets += 5;
        }
    },   
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchId.pending, state => {
                state.loading = true
                state.error = false
            })
            .addCase(fetchSearchId.fulfilled, (state, action) => {
                state.loading = false
                state.searchId = action.payload
            })
            .addCase(fetchSearchId.rejected, (state, action) => {
                state.error = true
                state.loading = false
                state.errorMessage = action.error.message
            })
            .addCase(fetchTickets.pending, state => {
                state.ticketsLoading = true
                state.error = false
            })
            .addCase(fetchTickets.fulfilled, (state, action) => {
                state.tickets = [...state.tickets, ...action.payload.tickets];
                state.stopFetch = action.payload.stop
                state.ticketsLoading = !action.payload.stop
            })
            .addCase(fetchTickets.rejected, (state, action) => {
                if (action.payload === 'status: 500') {
                    state.fetchStatus500 += 1;
                } else {
                    state.errorMessage = action.error.message
                    state.ticketsLoading = false
                    state.error = true
                }
            })
    }

})

const selectFiltredTickets = createSelector(
    state => state.tickets.tickets,
    state => state.transfers.activeStops,
    state => state.transfers.stops,
    state => state.filters.activeFilter,
    (tickets, activeStops, stops, activeFilter) => tickets
        .filter(ticket => filterTicketsByStops(ticket, activeStops, stops))
        .sort(sortTickets(activeFilter))
)

export const selectVisibleTickets = createSelector(
    selectFiltredTickets,
    state => state.tickets.numOfShowedTickets,
    (tickets, numOfShowedTickets) => tickets.slice(0, numOfShowedTickets)
)

const { reducer, actions } = ticketsSlice

export default reducer
export const { 
    showMoreTicket
} = actions