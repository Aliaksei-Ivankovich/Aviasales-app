import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeStops: [
        {id: 0 },
        {id: 1 },
        {id: 2 },
        {id: 3 },
    ],
    stops: [
        {id: 0, label: 'Без пересадок'},
        {id: 1, label: '1 пересадка'},
        {id: 2, label: '2 пересадки'},
        {id: 3, label: '3 пересадки'}
    ]
}

const transfersSlice = createSlice({
    name: 'transfers',
    initialState,
    reducers: { 
        transfersChanged: (state, action) => {
            const { isChecked, id } = action.payload
            state.activeStops = isChecked ? [...state.activeStops, {id}] : state.activeStops.filter(item => item.id !== id)
        },
        transfersAllChanged: (state, action) => {
            state.activeStops = action.payload ? state.stops.map(item => ({id: item.id})) : []
        } 
    }
})

const { reducer, actions } = transfersSlice

export default reducer
export const { 
    transfersChanged,
    transfersAllChanged
} = actions